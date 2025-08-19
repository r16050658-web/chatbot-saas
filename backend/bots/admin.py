from django.contrib import admin
from .models import ChatBot, FAQ, ChatMessage

admin.site.register(ChatBot)
admin.site.register(FAQ)
admin.site.register(ChatMessage)
