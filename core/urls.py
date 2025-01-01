from django.urls import path
from . import views
from .views import QuestionAPI


app_name = "core"
urlpatterns = [
    path("", views.home, name="home"),
    path("test_page/", views.test_page, name="test_page"),
    path('api/questions/', QuestionAPI.as_view(), name='questions-api'),
]