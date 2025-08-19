from django.db import models
from django.contrib.auth.models import User


class ChatBot(models.Model):
    """Each user can create their own chatbot"""
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chatbots")
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.owner.username})"


class ChatMessage(models.Model):
    """Messages between user and chatbot"""
    chatbot = models.ForeignKey(ChatBot, on_delete=models.CASCADE, related_name="messages")
    sender = models.CharField(max_length=50, choices=(("user", "User"), ("bot", "Bot")))
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.message[:30]}"
