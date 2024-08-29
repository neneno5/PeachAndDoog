from django.views.generic import View
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='/admin/login/')
def index(request):
    return render(request, "app/index.html")

@login_required(login_url='/admin/login/')    
def page1(request):
    return render(request, "app/page1.html")
