from django.urls import path
from . import views

urlpatterns = [
    path('submit_contact_form/', views.submit_contact_form, name='submit_contact_form'),
    path('login/', views.login, name='login'),
    #path('logout/', auth_views.LogoutView.as_view(template_name="users/logged_out.html"), name='logout'),
]

# Handles the login and logout process for users

