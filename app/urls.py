from django.urls import path
from app import views

urlpatterns = [
    path("", views.index, name="index"),
    path("page1", views.page1, name="page1"),
]