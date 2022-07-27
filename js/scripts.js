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

const button = document.getElementById("back-to-top");

const showHideBackToTop = function() {
  var y = window.scrollY;
  if (y >= 800) {
    button.classList.add("show");
    button.classList.remove("hide");
  } else {
    button.classList.add("hide");
    button.classList.remove("show");
  }
};

function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

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

window.addEventListener("scroll", showHideBackToTop);