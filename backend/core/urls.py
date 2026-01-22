from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.models import User # <--- Ye import zaroori hai

# Ek hi home function rakhein (JsonResponse wala)
def home(request):
    return JsonResponse({
        "status": "ok",
        "message": "Dharma Portfolio Backend is Live 🚀"
    })

# Temporary function Admin banane ke liye
def create_admin_online(request):
    username = "Dharma004" 
    password = "Durgesh2003" # <--- Apna pasandida password yahan likhein
    
    u, created = User.objects.get_or_create(username=username)
    u.set_password(password)
    u.is_superuser = True
    u.is_staff = True
    u.save()
    
    if created:
        return HttpResponse(f"Mubarak ho! Admin '{username}' naya ban gaya hai.")
    else:
        return HttpResponse(f"Admin '{username}' ka password update ho gaya hai.")

urlpatterns = [
    path('', home),   
    path('admin/', admin.site.urls),
    path('api/', include('Dharma.urls')),
    
    # Is URL ko ek baar browser mein chalana hai bas
    path('setup-admin-secret-99/', create_admin_online), 
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)