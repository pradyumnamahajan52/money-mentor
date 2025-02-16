from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import JsonResponse, HttpResponse, HttpResponsePermanentRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout, get_user_model
from django.core.mail import send_mail
from django.utils import timezone
from .serializers import UserSerializer
from .models import User, User_OTP
from datetime import timedelta
import os, math, random, re

# Create your views here.


def generateOTP():
    digits = "0123456789"
    OTP = ""
    for i in range(6):
        OTP += digits[math.floor(random.random() * 10)]
    return OTP

class CustomRedirect(HttpResponsePermanentRedirect):
    allowed_schemes = [os.environ.get('APP_SCHEME'), 'http', 'https']


@csrf_exempt
def signin(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid paramenter only'})

    # print(request.POST.get('email', None))  - if you will not get email, None will be printed
    username = request.POST['email']
    password = request.POST['password']

    # print(username)
    # print(password)

# validation part

    # for checking for email validation
    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': 'Enter a valid email'})

    # for checking passowrd length
    if len(password) < 3:
        return JsonResponse({'error': 'Password needs to be at least of 3 char'})

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)

        if user.check_password(password):
            usr_dict = UserModel.objects.filter(
                email=username).values().first()
            usr_dict.pop('password')

            # if user.session_token != "0":
            #     user.session_token = "0"
            #     user.save()
            #     return JsonResponse({'error': "Previous session exists!"})

            # token = generate_session_token()
            # user.session_token = token
            # user.save()
            user_session_token = str(Token.objects.get(user=user.id))
            login(request, user)
            print(user_session_token)
            return JsonResponse({'token': user_session_token, 'user': usr_dict})
        else:
            return JsonResponse({'error': 'Invalid password'})

    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})
    except Exception as error:
        param = {
            "error": str(error),
            "status": status.HTTP_400_BAD_REQUEST
        }
        return JsonResponse(param)


def signout(request):
    logout(request)
    return JsonResponse({'success': 'Logout success'})

@csrf_exempt
def forgetPassword(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid paramenter only'})
    username = request.POST['email']

    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': 'Enter a valid email'})

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        random_otp = generateOTP()
        send_mail('Poconest Password Reset OTP',
                  'Your OTP for resetting Poconest Account is '+random_otp+'.',
                  'no-replay@psmweb.in',
                  [user.email],
                  fail_silently=False)
        user_otp = User_OTP(user=user, OTP=random_otp)
        user_otp.save()
        param = {
            "user_otp_id": user_otp.id,
            "status": status.HTTP_201_CREATED
        }
        return JsonResponse(param)
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})
    except Exception as error:
        param = {
            "error": str(error),
            "status": status.HTTP_400_BAD_REQUEST
        }
        return JsonResponse(param)

@csrf_exempt
def forgetPasswordResendOtp(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid paramenter only'})

    username = request.POST['email']
    otp_id = request.POST['user_otp_id']

    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': 'Enter a valid email'})

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        user_otp = User_OTP.objects.get(id=otp_id)
        send_mail('Prerna Eye Care Password Reset OTP',
                  'Your OTP for resetting Prerna Eye Care Account is '+user_otp.OTP+'.',
                  'no-replay@psmweb.in',
                  [user.email],
                  fail_silently=False)
        param = {
            "user_otp_id": user_otp.id,
            "status": status.HTTP_201_CREATED
        }
        return JsonResponse(param)
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})
    except Exception as error:
        param = {
            "error": str(error),
            "status": status.HTTP_400_BAD_REQUEST
        }
        return JsonResponse(param)

@csrf_exempt
def forgetPasswordVerify(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid paramenter only'})

    username = request.POST['email']
    otp = request.POST['otp']

    # for checking for email validation
    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': 'Enter a valid email'})


    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        user_otp = User_OTP.objects.filter(user=user,OTP=otp).last()
        if user_otp == None:
            param = {
                "error": "Invalid OTP",
                "status": status.HTTP_400_BAD_REQUEST
                }
            return JsonResponse(param)
        user_otp_expire_time = user_otp.created_at + timedelta(minutes=10)        
        if user_otp_expire_time >= timezone.now():
            param = {
                "status": status.HTTP_201_CREATED
                }
            return JsonResponse(param)
        else:
            param = {
                "error": "OTP Expire",
                "status": status.HTTP_400_BAD_REQUEST
                }
            return JsonResponse(param)
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})
    except User_OTP.DoesNotExist:
        return JsonResponse({'error': 'Invalid OTP'})
    except Exception as error:
        param = {
            "error": str(error),
            "status": status.HTTP_400_BAD_REQUEST
        }
        return JsonResponse(param)

@csrf_exempt
def forgetPasswordReset(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid paramenter only'})

    username = request.POST['email']
    password = request.POST['password']
    otp = request.POST['otp']

    # for checking for email validation

    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': 'Enter a valid email'})

    if len(password) < 3:
        return JsonResponse({'error': 'Password needs to be at least of 3 char'})

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        user_otp = User_OTP.objects.filter(user=user,OTP=otp).last()
        if user_otp == None:
            param = {
                "error": "Invalid OTP",
                "status": status.HTTP_400_BAD_REQUEST
                }
            return JsonResponse(param)
        user_otp_expire_time = user_otp.created_at + timedelta(minutes=15)
        if user_otp_expire_time >= timezone.now():
            if user_otp.OTP == otp:
                user.set_password(password)
                user.save()
                param = {
                    "User_verify": True,
                    "status": status.HTTP_201_CREATED
                    }
                return JsonResponse(param)
            else:
                param = {
                    "error": "OTP Incorrect",
                    "status": status.HTTP_400_BAD_REQUEST
                }
                return JsonResponse(param)
        else:
            param = {
                "error": "OTP Expire",
                "status": status.HTTP_400_BAD_REQUEST
            }
            return JsonResponse(param)
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid Email'})
    except Exception as error:
        param = {
            "error": str(error),
            "status": status.HTTP_400_BAD_REQUEST
        }
        return JsonResponse(param)


class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create': [AllowAny],
                                    'list': [IsAuthenticated],
                                    'update': [IsAuthenticated],
                                    'destroy': [IsAuthenticated]}

    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]

        except KeyError:
            return [permission() for permission in self.permission_classes]