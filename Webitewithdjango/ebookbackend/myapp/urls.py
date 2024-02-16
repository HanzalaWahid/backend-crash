from django.contrib import admin
from django.urls import path , include
from myapp import  views 

urlpatterns = [
    path('',views.index,name='index') 
    # path('admin/', admin.site.urls),

]

from django.urls import path
from . import views

urlpatterns = [
    path('submit_contact/', views.submit_contact_form, name='submit_contact_form'),
   
]


