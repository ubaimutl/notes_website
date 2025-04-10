from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExplanationViewSet

router = DefaultRouter()
router.register(r'explanations', ExplanationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]