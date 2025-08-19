from django.shortcuts import redirect
from django.contrib import messages

class TokenLimitMiddleware:
    """
    Blocks POST requests to chat endpoint if user has no tokens left.
    """
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/bots/') and request.method == 'POST':
            user = getattr(request, 'user', None)
            if user and user.is_authenticated and user.tokens_remaining <= 0:
                messages.error(request, "No tokens remaining.")
                return redirect('bot:list')
        return self.get_response(request)
