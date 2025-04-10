from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MainSubjectViewSet, SubSubjectViewSet

router = DefaultRouter()
router.register(r'main-subjects', MainSubjectViewSet)
router.register(r'sub-subjects', SubSubjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
]