from django.urls import path
from .views import topics

urlpatterns = [
    path('topics/', topics),
]

from .views import create_admin

urlpatterns = [
    path("topics/", topics),
    path("create-admin/", create_admin),
    path("run-migrations/", run_migrations),
]
