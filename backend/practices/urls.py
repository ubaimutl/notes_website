from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PracticeViewSet

router = DefaultRouter()
router.register(r'practices', PracticeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]