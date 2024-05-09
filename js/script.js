const burgerBtn = document.querySelector('.burgerBtn');
const mainNav = document.querySelector('.mainNav');
const navIcon = document.querySelector('.nav-icon');

document.addEventListener('DOMContentLoaded', () => {
  burgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navIcon.classList.toggle('open'); 
  });
});

// Servicios

