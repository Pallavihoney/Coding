from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    height = models.DecimalField(max_digits=5, decimal_places=2)  # Height in centimeters
    weight = models.DecimalField(max_digits=5, decimal_places=2)  # Weight in kilograms
    mobile_number = models.CharField(max_length=10)  # Assuming Indian format mobile number

    def __str__(self):
        return self.name

class BMIRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bmi = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.name} - {self.created_at}"

