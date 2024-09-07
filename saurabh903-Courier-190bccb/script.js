document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.head', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.container', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.content', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.left', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.container-4', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

});