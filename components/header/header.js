/* components/header/header.js */
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target)) {
            mobileMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});