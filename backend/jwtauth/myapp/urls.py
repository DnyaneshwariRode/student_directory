from django.urls import path
from . import views

app_name = 'myapp'

urlpatterns = [
     path('login/', views.login_page, name='login'),
    path('semester/', views.semester, name='semester'),
    path('index/',views.index,name='index'),
    path('help/',views.help,name='help'),
    path('contact/',views.contact,name='contact'),
    path('about/',views.about,name='about'),
    path('teacher/',views.TeacherView,name='teacher'),
]
