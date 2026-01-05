from django.urls import path
from . import views

app_name = 'myapp'

urlpatterns = [
    path('semester/', views.semester, name='semester'),
    path('index/',views.index,name='index'),
]
