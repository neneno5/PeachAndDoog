from django.urls import path
from app import views

urlpatterns = [
    path("index", views.index, name="index"),
    path("page1", views.page1, name="page1"),
    path("page2", views.page2, name="page2"),
]