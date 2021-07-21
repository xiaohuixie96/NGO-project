# Generated by Django 3.2.4 on 2021-07-21 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.IntegerField(null=True)),
                ('firstName', models.CharField(max_length=15, null=True)),
                ('lastName', models.CharField(max_length=15, null=True)),
                ('phone', models.IntegerField(null=True)),
                ('email', models.CharField(max_length=25, null=True)),
                ('address1', models.CharField(max_length=30, null=True)),
                ('address2', models.CharField(max_length=30, null=True)),
                ('city', models.CharField(max_length=15, null=True)),
                ('state', models.CharField(max_length=15, null=True)),
                ('zipCode', models.IntegerField(null=True)),
                ('country', models.CharField(max_length=15, null=True)),
                ('CMA', models.IntegerField(null=True)),
                ('urbanization', models.CharField(max_length=50, null=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=8, null=True)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('donationType', models.CharField(max_length=15, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='DonationType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=30)),
            ],
        ),
    ]
