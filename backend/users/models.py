from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    tokens_remaining = models.IntegerField(default=1000)

    def __str__(self):
        return self.username
