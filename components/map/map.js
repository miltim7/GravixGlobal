/* components/map/map.js */
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
    
    const mapWrapper = document.querySelector('.map__wrapper');
    if (mapWrapper) {
        mapWrapper.style.animationPlayState = 'paused';
        observer.observe(mapWrapper);
    }
});