from rest_framework import viewsets
from .models import MainSubject, SubSubject
from .serializers import MainSubjectSerializer, SubSubjectSerializer

class MainSubjectViewSet(viewsets.ModelViewSet):
    queryset = MainSubject.objects.all()
    serializer_class = MainSubjectSerializer

class SubSubjectViewSet(viewsets.ModelViewSet):
    queryset = SubSubject.objects.all()
    serializer_class = SubSubjectSerializer