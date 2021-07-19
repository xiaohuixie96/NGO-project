from django.db import models
from django.contrib.auth.models import User

class Donation(models.Model):
    ID = models.AutoField(primary_key=True)
    DonationType = [
        ('MW', 'Mighty Warriors'),
        ('RS', 'Run For The Sun'),
        ('MT', 'Mission Trip'),
        ('MG', 'Memorial Gift'),
    ]
    CMA = models.CharField(max_length=15, null=True)
    Urbanization = models.CharField(max_length=50, null=True)
    GeneralDonationFund = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    RunForTheSon2017 = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    MissionTripSponsorship = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    MemorialGift = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    CreatedDate = models.DateTimeField(auto_now_add=True)
    UpdatedDate = models.DateTimeField(auto_now=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
    primary_key='user_id')
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
    Donations = models.ForeignKey(Donation, on_delete=models.CASCADE, null=True)


