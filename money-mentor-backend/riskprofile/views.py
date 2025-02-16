from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets, status, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes, api_view, authentication_classes
from .models import RiskProfileQuestions,RiskProfileQuestionAnswer
from .serializers import RiskProfileQuestionsbySerializer
# Create your views here.



class RiskProfileQuestionsViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes_by_action = {'create': [IsAuthenticated],
                                    'list': [AllowAny],
                                    'detail': [AllowAny],
                                    'update': [IsAuthenticated],
                                    'destroy': [IsAuthenticated]}
    queryset = RiskProfileQuestions.objects.all().order_by('id')
    serializer_class = RiskProfileQuestionsbySerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]

        except KeyError:
            return [permission() for permission in self.permission_classes]

