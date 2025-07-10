// Typed.js animation
const typed = new Typed("#typed-text", {
  strings: ["a Developer.", "a DSA Enthusiast.", "a Creative Thinker."],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

// Animate On Scroll
AOS.init({
  duration: 1000,
  once: true,
});

// Contact Form Feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Thank you for reaching out!";
  this.reset();
});
