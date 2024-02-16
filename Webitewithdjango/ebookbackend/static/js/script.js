// let navbar = document.querySelector('.navbar')

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     loginForm.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// let loginForm = document.querySelector('.login-form')

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form')

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// let themeBtn = document.querySelector('#theme-btn');

// themeBtn.onclick = () =>{
//     themeBtn.classList.toggle('fa-sun');

//     if(themeBtn.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }

// };

// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let searchForm = document.querySelector('.search-form');

// Toggle active class for navbar
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

// Toggle active class for login form
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// Toggle active class for search form
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Remove active class from navbar, login form, and search form when scrolling
window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

// Initialize Swiper if .review-slider exists
if (document.querySelector('.review-slider')) {
    var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
