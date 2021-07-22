from django.db import models
from django.contrib.auth.models import User

class DonationType(models.Model):
    type = models.CharField(max_length=30)

class Donation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
        primary_key='id')
    Firstname = models.CharField(max_length=15, null=True)
    Lastname = models.CharField(max_length=15, null=True)
    Phone = models.CharField(max_length=15, null=True)
    Email = models.CharField(max_length=25, null=True)
    Address1 = models.CharField(max_length=30, null=True)
    Address2 = models.CharField(max_length=30, null=True)
    City = models.CharField(max_length=15, null=True)
    State = models.CharField(max_length=15, null=True)
    Zip = models.CharField(max_length=10, null=True)
    Country = models.CharField(max_length=15, null=True)
    CMA = models.CharField(max_length=15, null=True)
    Urbanization = models.CharField(max_length=50, null=True)
    Amount = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    CreatedDate = models.DateTimeField(auto_now_add=True, null=True)
    DonationsType = models.ForeignKey(DonationType, related_name='donations', on_delete=models.CASCADE, null=True)


