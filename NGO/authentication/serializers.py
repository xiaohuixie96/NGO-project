from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=15,
        min_length=8)
    password = serializers.CharField(max_length=15, 
        min_length=8, write_only=True)
    first_name = serializers.CharField(max_length=25, 
        min_length=2)
    last_name = serializers.CharField(max_length=25, 
        min_length=2)
    email = serializers.EmailField(max_length=30, 
        min_length=4)
    
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 
        'email', 'password', 'is_superuser']
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'email': 
            ('Email exists')})
        return super().validate(attrs)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], password = validated_data['password'] , email=validated_data['email'],
            first_name=validated_data['first_name'], last_name=validated_data['last_name'])
        return user

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=15, min_length=8)
    password = serializers.CharField(max_length=15, min_length=8,
    write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'password']