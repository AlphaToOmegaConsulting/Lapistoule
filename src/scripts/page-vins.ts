export function initPage() {
    console.log('Page: Vins initialized');
    initScrollAnimations();
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Cible : les blocs produits, l'interlude et les éléments explicites du Hero
    const targets = document.querySelectorAll('.product-block, .interlude-philosophie, .hero-content');
    
    targets.forEach(target => {
        target.classList.add('fade-element');
        observer.observe(target);
    });
}