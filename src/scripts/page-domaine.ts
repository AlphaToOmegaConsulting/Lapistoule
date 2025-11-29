/**
 * Page Script: Histoire
 * Handles interactions specific to the history page
 */

export const initPage = () => {
  console.log('Page Domaine initialized');

  // Animation Observer for scroll elements
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate (matching standard classes in index.html)
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));
};
