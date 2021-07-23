from django.db.models import base
from django.urls import path
from .views import *
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', UserManagement, basename='users')

urlpatterns = [
    url('', include(router.urls)),
    path('userlist/', user_list, name='userlist'),
    path('detail/<pk>/', user_detail, name='detail'),
    path('edit/<pk>/', user_detail, name='edit'),
    path('donationtype/', donationType_list, name="donationtype"),
    path('donation/', donation_list, name="donation"),
    path('delete/<pk>/', user_detail, name= 'delete')
    
]