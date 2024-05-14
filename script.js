document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide(index);
    }

    showSlide(index);


    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
});
