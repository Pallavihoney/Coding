from operator import index
from django.shortcuts import render, redirect
from django.http import HttpResponse
from bmi_app.models import BMIRecord
from .forms import BMIForm

# Create your views here.

def calculate_bmi(request):
    if request.method == "POST":  
        form = BMIForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/')  
            except:  
                pass
    else:  
        form = BMIForm()  
    return render(request,'bmi.html')  



 

  




