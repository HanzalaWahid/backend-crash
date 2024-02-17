from django.shortcuts import render , HttpResponse

# Create your views here.

def index(request):
    
    return render(request,'index.html')

from django.shortcuts import render
from django.http import HttpResponse
# from .forms import ContactForm

def submit_contact_form(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            number = form.cleaned_data['number']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            
            # Here you can perform any actions you need with the form data,
            # such as sending an email, saving to the database, etc.
            
            # For now, let's just print the data
            print(f"Name: {name}")
            print(f"Email: {email}")
            print(f"Number: {number}")
            print(f"Subject: {subject}")
            print(f"Message: {message}")
            
            return HttpResponse('Form submitted successfully!')
    else:
        pass
    
    return render(request, 'index.html', {'form': form})
