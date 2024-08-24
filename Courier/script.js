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
        duration: 2000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.cards', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    // ScrollReveal().reveal('.footer', {
    //     duration: 1000,
    //     origin: 'bottom',
    //     distance: '50px',
    //     opacity: 0
    // });
});

const bannerItems = document.querySelectorAll('.banner-item');
let currentItem = 0;

setInterval(() => {
  bannerItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % bannerItems.length;
  bannerItems[currentItem].classList.add('active');
}, 1000); // change every 1 second

// add animation to the banner items
bannerItems.forEach((item, index) => {
  item.style.transform = `translateY(${index * 50}px)`;
});

// update the transform property to create the animation effect
setInterval(() => {
  bannerItems.forEach((item, index) => {
    item.style.transform = `translateY(${(index - currentItem) * 50}px)`;
  });
}, 16); // 16ms = 60fps