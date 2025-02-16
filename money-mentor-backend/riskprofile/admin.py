from django.contrib import admin
from .models import RiskProfileQuestions, RiskProfileQuestionAnswer
from django.utils.html import format_html

# Register your models here.


class RiskProfileQuestionAnswerAdminInlines(admin.StackedInline):
    model = RiskProfileQuestionAnswer


@admin.register(RiskProfileQuestions)
class RiskProfileQuestionsAdmin(admin.ModelAdmin):
    inlines = [RiskProfileQuestionAnswerAdminInlines]
    # def PropertyImage(self, object):
    #     if object.image.url == None or object.image.url == '':
    #         return format_html('<img src="{}" width="80" />'.format('https://via.placeholder.com/80'))

    #     return format_html('<img src="{}" width="80" />'.format(object.image.url))
    list_display = ("id", "question", "is_active",
                    "created_at", "updated_at")
    list_display_links = ("id", "question")

    class Meta:
        model = RiskProfileQuestions

@admin.register(RiskProfileQuestionAnswer)
class RiskProfileQuestionAnswerAdmin(admin.ModelAdmin):
    # def PropertyImage(self, object):
    #     return format_html('<img src="{}" width="80" />'.format(object.image.url))
    list_display = ('id', 'question', 'answer',
                    'created_at', 'updated_at')
    list_display_links = ('id', 'question', 'answer')

    class Meta:
        model = RiskProfileQuestionAnswer

