from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortfolioViewSet,ContactCreateView
from backend.Dharma import views

router = DefaultRouter()
router.register(r'portfolio', PortfolioViewSet , basename='portfolio')

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
]