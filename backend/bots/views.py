from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import ChatBot, ChatMessage
from .serializers import ChatBotSerializer, ChatMessageSerializer

class ChatBotViewSet(viewsets.ModelViewSet):
    serializer_class = ChatBotSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ChatBot.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ChatMessageViewSet(viewsets.ModelViewSet):
    serializer_class = ChatMessageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ChatMessage.objects.filter(chatbot__owner=self.request.user)
