const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.mainNav');
const navIcon = document.querySelector('.nav-icon');

document.addEventListener('DOMContentLoaded', () => {
  menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navIcon.classList.toggle('open'); 
  });
});

// Mas vendidos

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.carousel-images img');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

