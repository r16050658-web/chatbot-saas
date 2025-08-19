from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from bot.models import ChatBot, ChatMessage  # ✅ correct import

@login_required
def home(request):
    bots_count = ChatBot.objects.filter(owner=request.user).count()
    msgs_count = ChatMessage.objects.filter(chatbot__owner=request.user).count()
    tokens = getattr(request.user, "tokens_remaining", 0)

    return render(request, "dashboard/dashboard.html", {
        "bots_count": bots_count,
        "msgs_count": msgs_count,
        "tokens": tokens,
    })
