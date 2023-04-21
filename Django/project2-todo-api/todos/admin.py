from django.contrib import admin

# Register your models here.

from .models import Todo

# this is how we customize the admin panel
class TodoAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "content",
    )


admin.site.register(Todo)
