from django.urls import path
from  . import views
from .views import calculate_bmi

app_name = 'bmi_app'

urlpatterns = [
    path('calculate_bmi/', calculate_bmi, name='calculate_bmi'),

]
