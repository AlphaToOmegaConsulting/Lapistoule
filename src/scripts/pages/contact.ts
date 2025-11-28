export function initContactPage() {
    console.log('Page: Contact initialized');

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message ! (Simulation)');
        });
    }
}
