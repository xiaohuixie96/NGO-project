from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth.models import User

class UserManagement(viewsets.ModelViewSet):
 #   permissions_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DonationManagement(viewsets.ModelViewSet):
 #   permissions_classes = [permissions.IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = DonationManagementSerializer

class Donation(viewsets.ModelViewSet):
 #   permissions_classes = [permissions.IsAuthenticated]
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    
