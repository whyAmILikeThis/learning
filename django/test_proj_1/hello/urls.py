from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:name>", views.greet, name="greet"),
    # path("bitch", views.bitch, name="bitch"),
    # path("motherfucker", views.motherfucker, name="motherfucker")
]