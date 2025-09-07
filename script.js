document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks! Your message has been sent.";
  this.reset();
});