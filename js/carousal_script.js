document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = i === index ? 1 : 0.5;
            slide.style.transition = 'opacity 0.5s'; // Set a smooth transition for opacity
            slide.style.transform = `translateX(${100 * (i - index)}%)`; // Adjust the translation based on the index
        });

        slides[index].classList.add('active');
        slides[index].style.transition = 'opacity 0.5s, transform 0.5s'; // Set a smooth transition for opacity and scale
        slides[index].style.transform = 'translateX(0)'; // Reset translation for the active slide
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function autoSlide() {
        nextSlide();
    }

    showSlide(currentSlide);

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatic sliding with smooth transition
    //setInterval(autoSlide, 5000); // Change the interval as needed
});




