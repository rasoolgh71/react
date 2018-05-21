from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request,'task/home.html')

def react1(request):
    return render(request,'task/react1.html')

def react2(request):
    return render(request,'task/react2.html')

def tolist(request):
    return render(request,'task/tolist.html')

def markdown(request):
    return render(request,'task/markdown.html')

def watch(request):
    return render(request,'task/watch.html')

def calculate(request):
    return render(request,'task/calculate.html')


def datashet(request):
    return render(request,'task/datashet.html')