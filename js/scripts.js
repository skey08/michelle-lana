const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        })
    });
});