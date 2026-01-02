from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def topics(request):
    return Response([
        {
            "id": 1,
            "title": "Inertia",
            "question": "Bus rukte hi log aage kyon jhuk jaate hain?"
        },
        {
            "id": 2,
            "title": "Pressure",
            "question": "Patli heel zyada dhans kyon jaati hai?"
        }
    ])

from django.contrib.auth.models import User
from django.http import HttpResponse

def create_admin(request):
    if User.objects.filter(username="admin").exists():
        return HttpResponse("Admin already exists")

    User.objects.create_superuser(
        username="admin",
        password="admin123",
        email="admin@test.com"
    )
    return HttpResponse("Admin created successfully")

from django.core.management import call_command
from django.http import HttpResponse

def run_migrations(request):
    call_command("migrate", interactive=False)
    return HttpResponse("Migrations completed")