from django.conf import settings
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from django.contrib import auth
import jwt
from rest_framework.permissions import AllowAny, IsAuthenticated
from donation.serializers import UserSerializer

def home(request):
    return render(request, 'home.html')

class RegisterView(GenericAPIView):
    permission_classes = [AllowAny, ]
    serializer_class = RegisterSerializer
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(GenericAPIView):
    permission_classes = [AllowAny, ]
    serializer_class = LoginSerializer

    def post(self, request):
        data = request.data
        username = data.get('username', '')
        password = data.get('password', '')
        user = auth.authenticate(username=username, 
            password=password)

        if user:
            auth_token = jwt.encode(
                {'username': user.username}, 
                settings.SECRET_KEY, algorithm="HS256")
            serializer = UserSerializer(user)
            data = {'user': serializer.data, 'token': auth_token}
            
            return Response(data, status=status.HTTP_200_OK)
        
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



 