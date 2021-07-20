from django.db import models
from django.contrib.auth.models import User

class DonationType(models.Model):
    type = models.CharField(max_length=30)

class Donation(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key='user_id')
    firstName = models.CharField(max_length=15, null=True)
    lastname = models.CharField(max_length=15, null=True)
    phone = models.IntegerField(max_length=15, null=True)
    email = models.CharField(max_length=25, null=True)
    address1 = models.CharField(max_length=30, null=True)
    address2 = models.CharField(max_length=30, null=True)
    city = models.CharField(max_length=15, null=True)
    state = models.CharField(max_length=15, null=True)
    zipCode = models.IntegerField(max_length=10, null=True)
    country = models.CharField(max_length=15, null=True)
    CMA = models.IntegerField(max_length=15, null=True)
    urbanization = models.CharField(max_length=50, null=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    date = models.CharField(auto_now_add=True, null=True)
    donationType = models.ForeignKey(DonationType, related_name='donations', on_delete=models.CASCADE, null=True)


