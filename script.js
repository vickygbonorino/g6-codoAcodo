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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const subject = document.getElementById("subject").value;
        const agree = document.getElementById("agree").checked;

        if (!name || !email || !message || !agree) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("Por favor completa todos los campos obligatorios.");
        }
    });
});