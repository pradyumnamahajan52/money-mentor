from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

from django.db import models
# from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.conf import settings

class UserManager(BaseUserManager):

    def create_user(self, email, password=None):
        if email is None:
            raise TypeError('Users should have a Email')

        user = self.model( email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user( email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


AUTH_PROVIDERS = {'facebook': 'facebook', 'google': 'google',
                  'twitter': 'twitter', 'email': 'email'}


class User(AbstractBaseUser, PermissionsMixin):
    '''
    encryption=SHA512/256 || salt = 128 || my_encryption=psmweb5
    '''
    # roles = (
    #     ('doctor', 'Doctor'),
    #     ('reception', 'Reception'),
    #     ('assistant', 'Assistant'),
    # )
    username = None
    first_name = models.CharField(max_length=50,default=None,blank=True,null=True) 
    last_name = models.CharField(max_length=50,default=None,blank=True,null=True) 
    # role = models.CharField(max_length=50,default=None,blank=True,null=True,choices=roles)
    mobile_no = models.CharField(max_length=11,default=None,blank=True,null=True) 
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    image = models.ImageField(blank=True,null=True,default=None)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    auth_provider = models.CharField(
        max_length=255, blank=False,
        null=False, default=AUTH_PROVIDERS.get('email'))

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email   

    # def tokens(self):
    #     refresh = RefreshToken.for_user(self)
    #     return {
    #         'refresh': str(refresh),
    #         'access': str(refresh.access_token)
    #     }

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class User_OTP(models.Model):
    user = models.ForeignKey(User,models.CASCADE,default=None)
    OTP = models.CharField(max_length=8,null=True,default=None,blank=True)
    created_at = models.DateTimeField(auto_now_add= True)

