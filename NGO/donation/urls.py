from django.db.models import base
from django.urls import path
from .views import *
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', UserManagement, basename='users')
router.register(r'donationManagement', DonationManagement, basename='donationManagement')
router.register(r'donation', Donation, basename='donation')

urlpatterns = [
    url('', include(router.urls)),
]