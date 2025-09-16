// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    fadeElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});