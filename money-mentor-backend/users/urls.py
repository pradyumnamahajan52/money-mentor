from django.urls import path,include
from rest_framework import routers
from django.contrib import admin
from . import views

router = routers.DefaultRouter()
router.register(r'register', views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.signin, name='signin'),
    path('logout/', views.signout, name='signout'),  
    path('forget-password/', views.forgetPassword, name='forget-password'),
    path('forget-password/resend/otp', views.forgetPasswordResendOtp, name='forget-password-resend-otp'),
    path('forget-password/verify/', views.forgetPasswordVerify, name='forget-password-verify'),
    path('forget-password/reset/', views.forgetPasswordReset, name='forget-password-reset'),
    # path('request-reset-email/', views.RequestPasswordResetEmail.as_view(),name="request-reset-email"),
    # path('password-reset/<uidb64>/<token>/',views.PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    # path('password-reset-complete', views.SetNewPasswordAPIView.as_view(),name='password-reset-complete'),
    path('', include(router.urls)),
]