from django.db.models import base
from django.urls import path
from .views import *
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', UserManagement, basename='users')
router.register(r'donation', ProdileView, basename='donation')
router.register(r'donationtype', DonationView, basename='donationtype')

urlpatterns = [
    url('', include(router.urls)),
]