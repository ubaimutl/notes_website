from rest_framework import viewsets
from .models import Explanation
from .serializers import ExplanationSerializer

class ExplanationViewSet(viewsets.ModelViewSet):
    queryset = Explanation.objects.all()
    serializer_class = ExplanationSerializer