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