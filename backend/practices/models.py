from django.db import models
from subjects.models import SubSubject

class Practice(models.Model):
    sub_subject = models.ForeignKey(SubSubject, related_name='practices', on_delete=models.SET_NULL, null=True, blank=True)
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return f"Practice for {self.sub_subject.name if self.sub_subject else 'No Sub-Subject'}"