// === Zora's House Prototype Vanilla JS ===

// Scroll Animations using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with animation classes
    const observerElements = document.querySelectorAll('.fade-in, .fade-in-up');

    // Create observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger transition
                entry.target.classList.add('visible');
                // Unobserve once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    });

    // Observe all elements
    observerElements.forEach(el => observer.observe(el));
});
