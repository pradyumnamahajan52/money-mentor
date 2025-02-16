from django.urls import path, include
from django.contrib import admin
from .views import getMarketStatus,getIndicesWatch

urlpatterns = [
    path('get-market-status/', getMarketStatus, name='get-market-status'),
    path('indices-watch/', getIndicesWatch, name='indices-watch/'),
]
