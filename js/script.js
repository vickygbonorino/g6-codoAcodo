const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.mainNav');
const navIcon = document.querySelector('.nav-icon');

document.addEventListener('DOMContentLoaded', () => {
  menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navIcon.classList.toggle('open'); 
  });
});

// Servicios

