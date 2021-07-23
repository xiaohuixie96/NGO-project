from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth.models import User
from authentication.serializers import RegisterSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

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

@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
   if request.method== 'GET':
      dt = User.objects.all()
      userSerializer = UserSerializer(dt, many=True)
      return JsonResponse(userSerializer.data, safe=False)

   elif request.method == 'POST':
      dt_data = JSONParser().parse(request)
      userSerializer = UserSerializer(data=dt_data)
      if userSerializer.is_valid():
         userSerializer.save()
         return JsonResponse(userSerializer.data, status=status.HTTP_201_CREATED) 
      return JsonResponse(userSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   # delete all users 
   elif request.method == 'DELETE':
      count = User.objects.all().delete()
      return JsonResponse({'message': '{} All users are deleted'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'PUT','DELETE'])
def user_detail(request, pk):
   try:
      user = User.objects.get(pk=pk)
   except User.DoesNotExist:
      return JsonResponse({'message': 'Get User detail'}, status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'GET':
      userSerializer = UserSerializer(user)
      return JsonResponse(userSerializer.data)

   elif request.method == 'PUT':
      dt = JSONParser().parse(request)
      userSerializer = UserSerializer(user, data=dt)
      if userSerializer.is_valid():
         userSerializer.save()
         return JsonResponse(userSerializer.data)
      return JsonResponse(userSerializer.errors, status = status.HTTP_400_BAD_REQUEST)

   elif request.method == 'DELETE':
      print(user)
      user.delete()
      return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def donationType_list(request):
   if request.method == 'GET':
      dt = DonationType.objects.all() 
      donationType_serializer = DonationTypeSerializer(dt, many=True)
      return JsonResponse(donationType_serializer.data, safe=False)

   elif request.method == 'POST':
        dt_data = JSONParser().parse(request)
        donationType_serializer = DonationTypeSerializer(data=dt_data)
        if donationType_serializer.is_valid():
            donationType_serializer.save()
            return JsonResponse(donationType_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(donationType_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   elif request.method == 'DELETE':
      count = DonationType.objects.all().delete()
      return JsonResponse({'message': '{} donationType were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST', 'DELETE'])
def donation_list(request):
   if request.method == 'GET':
      d = Donation.objects.all() 
      donation_serializer = DonationSerializer(d, many=True)
      return JsonResponse(donation_serializer.data, safe=False)

   elif request.method == 'POST':
        d_data = JSONParser().parse(request)
        donation_serializer = DonationSerializer(data=d_data)
        if donation_serializer.is_valid():
            donation_serializer.save()
            return JsonResponse(donation_serializer.data, status=status.HTTP_201_CREATED) 
        print(donation_serializer.errors)
        return JsonResponse(donation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   elif request.method == 'DELETE':
      count = Donation.objects.all().delete()
      return JsonResponse({'message': '{} donation were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def donation_detail(request, pk):
   try:
      user = User.objects.get(pk=pk)
   except User.DoesNotExist:
      return JsonResponse({'message': 'Get Donation detail'}, status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'GET':
      userSerializer = UserSerializer(user)
      return JsonResponse(userSerializer.data)


