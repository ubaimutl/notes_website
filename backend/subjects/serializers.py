from rest_framework import serializers
from .models import MainSubject, SubSubject

class SubSubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSubject
        fields = ['id', 'name', 'description']

class MainSubjectSerializer(serializers.ModelSerializer):
    sub_subjects = SubSubjectSerializer(many=True, read_only=True)

    class Meta:
        model = MainSubject
        fields = ['id', 'name', 'description', 'sub_subjects']