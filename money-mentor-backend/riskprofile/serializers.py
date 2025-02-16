from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import RiskProfileQuestions, RiskProfileQuestionAnswer


class ReverseRiskProfileQuestionAnswerbySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RiskProfileQuestionAnswer
        fields = ('id', 'answer', 'points', 'created_at', 'updated_at')


class RiskProfileQuestionsbySerializer(serializers.HyperlinkedModelSerializer):
    riskProfileQuestions = ReverseRiskProfileQuestionAnswerbySerializer(
        many=True, read_only=True)

    class Meta:
        model = RiskProfileQuestions
        fields = ('id', 'url', 'question', 'riskProfileQuestions',
                  'is_active', 'created_at', 'updated_at')
