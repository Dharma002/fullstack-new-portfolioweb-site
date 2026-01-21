from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self): return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    # Category yahan hai, on_delete bhi sahi hai
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='projects', null=True, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    github_url = models.URLField(max_length=200, blank=True)
    live_demo_url = models.URLField(max_length=200, blank=True)
    tech_stack = models.CharField(max_length=200, help_text="Example: Django, React, MySQL")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"    