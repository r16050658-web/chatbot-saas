from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChatBotViewSet, ChatMessageViewSet

router = DefaultRouter()
router.register(r'bots', ChatBotViewSet, basename="chatbot")
router.register(r'messages', ChatMessageViewSet, basename="chatmessage")

urlpatterns = [
    path('', include(router.urls)),
]
