from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request,'task/home.html')

def react1(request):
    return render(request,'task/react1.html')

def test(request):
    return render(request,'task/test.html')