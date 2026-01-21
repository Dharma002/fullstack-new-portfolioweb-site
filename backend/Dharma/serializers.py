from rest_framework import serializers
from .models import Project, Category,ContactMessage

class ProjectSerializer(serializers.ModelSerializer):
    # Category ka naam dikhane ke liye extra field
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = Project
        fields = '__all__' # Isse title, description, image sab React ko milenge

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'        