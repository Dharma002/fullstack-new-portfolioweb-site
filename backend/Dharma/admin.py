from django.contrib import admin
from .models import Project, Category, ContactMessage # ContactMessage yahan add karein

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at') 
    list_filter = ('category',)

# ContactMessage ko bhi thoda stylish dikhane ke liye aap Admin class bana sakte hain
@admin.register(ContactMessage)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at') # Admin panel mein hi dikh jayega kisne bheja
    readonly_fields = ('created_at',) # Isse koi date badal nahi payega

admin.site.register(Category)