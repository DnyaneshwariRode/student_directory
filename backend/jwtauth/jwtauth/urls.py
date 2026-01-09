from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from myapp.views import (
    LoginView,
    RegisterView,
    DashboardView,
    login_page,
)

urlpatterns = [
    # Frontend pages
    path("", include("myapp.urls")),
    path("admin/", admin.site.urls),
    path("login/", login_page, name="login"),
    path(
        "dashboard/",
        TemplateView.as_view(template_name="myapp/dashboard.html"),
        name="dashboard",
    ),

    # Auth APIs
    path("api/auth/login/", LoginView.as_view(), name="auth_login"),
    path("api/auth/register/", RegisterView.as_view(), name="auth_register"),

    # JWT refresh
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Protected API
    path("api/dashboard/", DashboardView.as_view(), name="api_dashboard"),
]
