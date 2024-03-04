from django.contrib import admin
from django.urls import path
from . import views  # Importe as views do seu aplicativo

urlpatterns = [
    path('polls/', include("polls.urls")),
    path('admin/', admin.site.urls),
    
]

