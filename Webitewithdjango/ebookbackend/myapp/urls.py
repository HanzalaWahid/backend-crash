# urls.py in your app

from django.contrib import admin
from django.urls import path, include
from myapp import views  # Import the views module



urlpatterns = [
    path('', include('myapp.urls')),
    path('submit_contact_form/', views.submit_contact_form, name='submit_contact_form'),
    # other app-specific URL patterns...
]
