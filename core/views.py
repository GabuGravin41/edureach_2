from django.shortcuts import render

# Create your views here.
def home(request):
    user = request.user
    context = {
        "title": "Home",
        "content": "Welcome to the home page!",
        "user": user,
    }

    return render(request, "core/index.html", context=context)