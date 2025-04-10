from rest_framework import serializers
from .models import Practice

class PracticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practice
        fields = ['id', 'question', 'answer', 'sub_subject']