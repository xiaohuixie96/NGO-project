from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth.models import User
from authentication.serializers import RegisterSerializer

class UserManagement(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer

   def create(self, request, *args, **kwargs):
      serializer = RegisterSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      self.perform_create(serializer)
      headers = self.get_success_headers(serializer.data)
      return Response(serializer.data, 
         status=status.HTTP_201_CREATED, headers=headers)

   def perform_create(self, serializer):
      serializer.save()

class ProdileView(viewsets.ModelViewSet):
   queryset = Donation.objects.all()
   serializer_class = DonationSerializer

class DonationView(viewsets.ModelViewSet):
   queryset = DonationType.objects.all()
   serializer_class = DonationTypeSerializer
    
