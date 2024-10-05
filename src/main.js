// import Typed from './typed.js'
// import ScrollReveal from 'scrollreveal'

// Sticky Header Shadow on Scroll
window.onscroll = function () {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

// Typed.js Animation
new Typed(".typedText", {
  strings: ["Wina", "UI/UX Designer", "Student"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// ScrollReveal Animations
ScrollReveal().reveal('.featured-text-card', {});
ScrollReveal().reveal('.featured-name', { delay: 100 });
ScrollReveal().reveal('.featured-text-info', { delay: 200 });
ScrollReveal().reveal('.featured-text-btn', { delay: 200 });
ScrollReveal().reveal('.featured-image', { delay: 300 });
ScrollReveal().reveal('.experiences-box', { interval: 200 });
ScrollReveal().reveal('.top-header', {});

ScrollReveal().reveal('.about-info', { origin: 'left', distance: '80px', duration: 2000, reset: true });
ScrollReveal().reveal('.skills-box', { origin: 'right', distance: '80px', duration: 2000, reset: true });
