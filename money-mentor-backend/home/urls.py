from django.urls import path, include
from rest_framework.authtoken import views
from django.contrib import admin
from .views import home

urlpatterns = [
    path('', home, name='home'),
]
