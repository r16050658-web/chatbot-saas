# backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("bot/", include("bot.urls")),            # bot app
    path("dashboard/", include("dashboard.urls")),# dashboard app
    path("accounts/", include("accounts.urls")),  # accounts app
    path("chat/", include("chat.urls")),          # chat app
    path("analyzer/", include("analyzer.urls")),  # analyzer app
    path("api/", include("chatbot.urls")),  # <- ye line add karo
]
