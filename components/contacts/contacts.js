/* components/contacts/contacts.js */
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
    
    const contactItems = document.querySelectorAll('.contacts__item');
    contactItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
});