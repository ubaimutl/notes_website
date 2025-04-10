from django.contrib import admin
from .models import MainSubject, SubSubject

@admin.register(MainSubject)
class MainSubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

@admin.register(SubSubject)
class SubSubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'main_subject', 'description')