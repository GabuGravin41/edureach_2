from rest_framework.views import APIView
from rest_framework.response import Response

class QuestionAPI(APIView):
    def get(self, request):
        questions = [
            {
                "id": 1,
                "question": "Determine all composite integers n such that ...",
                "solution": "If n has at least 2 prime divisors...",
                "correctAnswer": "Answer1"
            },
            {
                "id": 2,
                "question": "Let x and y be two positive integers such that x-y = 75...",
                "solution": "Let d = gcd(x, y)...",
                "correctAnswer": "165"
            }
        ]
        return Response(questions)
