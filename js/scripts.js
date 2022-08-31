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

function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const mainHeading = document.getElementsByTagName('h1')[0];
    mainHeading.setAttribute('tabIndex', -1);
    mainHeading.focus();
    mainHeading.removeAttribute('tabIndex');

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

if (button) {
    window.addEventListener("scroll", showHideBackToTop);
}