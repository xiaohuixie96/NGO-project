from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'is_superuser')

class DonationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationType
        fields = ('id', 'type')

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ('firstName', 'lastName', "phone" , "email" , "address1" , "address2" , "city" , 
        	"state" , "zipCode", "country", "CMA", "urbanization", "amount", "date", "donationType")
        
