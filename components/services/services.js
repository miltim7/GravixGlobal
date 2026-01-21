/* components/services/services.js */
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});