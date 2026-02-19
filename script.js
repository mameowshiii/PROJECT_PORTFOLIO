// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Select all sections to animate
document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition', 'duration-1000', 'opacity-0');
    section.style.transform = "translateY(20px)";
    observer.observe(section);
});