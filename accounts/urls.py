from django.urls import path, include
# will need to use views if customizing login and sign up is needed

urlpatterns = [
    path("", include("allauth.urls")),
]
