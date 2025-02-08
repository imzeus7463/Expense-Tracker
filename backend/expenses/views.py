from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import ExpenseSerializer
from expenses.models import Expense  # Make sure the import is correct


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]  # Authentication Required

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
