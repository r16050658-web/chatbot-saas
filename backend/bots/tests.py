from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from .models import ChatBot

User = get_user_model()

class BotViewsTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('aqsa','a@a.com','pass12345')
        self.client.login(username='aqsa', password='pass12345')
        self.bot = ChatBot.objects.create(owner=self.user, name='TestBot')

    def test_bot_list(self):
        res = self.client.get(reverse('bot:list'))
        self.assertEqual(res.status_code, 200)

    def test_chat_get(self):
        res = self.client.get(reverse('bot:chat', args=[self.bot.pk]))
        self.assertEqual(res.status_code, 200)
