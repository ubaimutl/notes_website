from django.db import models

class MainSubject(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class SubSubject(models.Model):
    main_subject = models.ForeignKey(MainSubject, related_name='sub_subjects', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    class Meta:
        unique_together = ('main_subject', 'name')  # Ensure sub-subject names are unique per main subject

    def __str__(self):
        return f"{self.main_subject.name} - {self.name}"