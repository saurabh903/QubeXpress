const slider = document.querySelector('.slides');
let isHovered = false;

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
    isHovered = true;
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
    isHovered = false;
});

setInterval(() => {
    if (!isHovered) {
        slider.style.animationPlayState = 'running';
    }
}, 100);  // Adjust the interval as needed


document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.head', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.banner-content', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.order-box', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.content', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.cards', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.footer', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0
    });
});
