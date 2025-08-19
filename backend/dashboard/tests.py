from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
User = get_user_model()

class DashboardTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('aqsa','a@a.com','pass12345')
        self.client.login(username='aqsa', password='pass12345')

    def test_dashboard_home(self):
        res = self.client.get(reverse('dashboard:home'))
        self.assertEqual(res.status_code, 200)
