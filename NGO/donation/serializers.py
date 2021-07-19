from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'is_superuser')

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'

class DonationManagementSerializer(serializers.ModelSerializer):
    donations = serializers.RelatedField(many=True, read_only=True)
    class Meta:
        model = Profile
        #fields = '__all__'
        fields = ['Firstname', 'donations']


