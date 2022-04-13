from re import S
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def bitch(request):
    return HttpResponse("hello bitch!")

def motherfucker(request):
    return HttpResponse("hello motherfucker!")

def greet(request, name):
    # return HttpResponse(f"hello {name.capitalize()}")
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })