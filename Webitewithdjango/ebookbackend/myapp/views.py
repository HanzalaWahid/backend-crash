from django.shortcuts import render , HttpResponse

# Create your views here.

def index(request):
    
    return render(request,'index.html')

def  login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

    else:
        # show blank form
        username = ''
        password = ''

    return render(request, 'index.html', {'username' : username, 'password' : password})



def submit_contact_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Process contact form data, e.g., save to the database
        
        return HttpResponse('Contact form submitted successfully!')
    else:
        return HttpResponse('Invalid request method')

    # return  render(request, 'index.html'),{'name':name},{'email':email} 




