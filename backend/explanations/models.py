from django.db import models

class Explanation(models.Model):
    word_or_sentence = models.CharField(max_length=255, unique=True)
    explanation = models.TextField()

    def __str__(self):
        return self.word_or_sentence