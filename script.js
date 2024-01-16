let currentSlide = 1;
let touchStartX;

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    event.preventDefault();
}

function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50 && currentSlide > 1) {
        currentSlide--;
    } else if (deltaX < -50 && currentSlide < 3) {
        currentSlide++;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(calc(-${(currentSlide - 1) * 100}vw))`;

    updatePagination();
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}