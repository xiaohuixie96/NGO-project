from django.db.models import base
from django.urls import path
from .views import *
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', UserManagement, basename='users')
#router.register(r'donation', ProdileView, basename='profile')
#router.register(r'donationtype', DonationView, basename='donation')



urlpatterns = [
    url('', include(router.urls)),
    path('donationtype/', donationType_list, name="donationtype"),
    path('donation/', donation_list, name="donation"),
]