from rest_framework import viewsets,generics
from .models import Project, Category,ContactMessage # Photo ki jagah Project
from .serializers import ProjectSerializer, CategorySerializer,ContactSerializer# PhotoSerializer ki jagah ProjectSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class PortfolioViewSet(viewsets.ReadOnlyModelViewSet):
    # Aapne queryset sahi likha tha, bas imports theek karne hain
    queryset = Project.objects.all() 
    serializer_class = ProjectSerializer
@method_decorator(csrf_exempt, name='dispatch')    
class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer    
    