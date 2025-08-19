from django import forms
from .models import ChatBot, FAQ

class ChatBotForm(forms.ModelForm):
    class Meta:
        model = ChatBot
        fields = ['name', 'description']

class FAQForm(forms.ModelForm):
    class Meta:
        model = FAQ
        fields = ['question', 'answer']
