from django.contrib import admin
from django.urls import path
from accounts.views import register

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path("admin/", admin.site.urls),

    # Auth APIs
    path("api/register/", register),
    path("api/token/", TokenObtainPairView.as_view()),
    path("api/token/refresh/", TokenRefreshView.as_view()),
]