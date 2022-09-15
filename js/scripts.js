const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
            if (burger.attributes['aria-expanded']?.value === 'false') {
                burger.attributes['aria-expanded'].value = 'true'
            } else {
                burger.attributes['aria-expanded'].value = 'false'
            }
        })
    });
});

const button = document.getElementById("back-to-top");

const showHideBackToTop = function() {
  var y = window.scrollY;
  if (y >= 800) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

function scrollToTop () {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    );
        
    setFocus();
}

function setFocus() {
    window.setTimeout(function() {
        const mainHeading = document.getElementsByTagName('h1')[0];
        mainHeading.setAttribute('tabIndex', -1);
        mainHeading.focus();
        mainHeading.removeAttribute('tabIndex');
        mainHeading.blur();
    },500)
}

if (button) {
    window.addEventListener("scroll", showHideBackToTop);
}