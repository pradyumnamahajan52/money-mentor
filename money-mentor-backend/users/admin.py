from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User,User_OTP

admin.site.unregister(Group)
admin.site.register(User)
admin.site.register(User_OTP)
