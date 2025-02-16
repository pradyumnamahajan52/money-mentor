from django.db import models
from ckeditor.fields import RichTextField
from users.models import User
from django.db.models.signals import post_delete
from django.dispatch import receiver


class RiskProfileQuestions(models.Model):
    question = RichTextField(default=None)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class RiskProfileQuestionAnswer(models.Model):
    question = models.ForeignKey(RiskProfileQuestions, related_name='riskProfileQuestions', default=None, on_delete=models.CASCADE)
    answer = RichTextField(default=None)
    points = models.SmallIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)