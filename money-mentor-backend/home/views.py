from rest_framework import status
from django.http import JsonResponse


def home(request):
    return JsonResponse({"status": status.HTTP_200_OK})


