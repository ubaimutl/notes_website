from rest_framework import serializers
from .models import Explanation

class ExplanationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Explanation
        fields = ['id', 'word_or_sentence', 'explanation']