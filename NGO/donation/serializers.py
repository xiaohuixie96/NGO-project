from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DonationManagementSerializer(serializers.ModelSerializer):
    donationModel = serializers.PrimaryKeyRelatedField(
        read_only=False, queryset=Donation.objects.all())

    class Meta:
        model = Profile
        fields = ('Firstname', 'Lastname',
            'donationModel')
    

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'


