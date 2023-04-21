from django.urls import path

from .views import ListTodo, DetailTodo

urlpatterns = [
    path("", ListTodo.as_view(), name="list_todo"),
    path("<int:pk>/", DetailTodo.as_view(), name="detail_todo"),
]

