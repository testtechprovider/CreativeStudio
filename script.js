// Week 3 JavaScript: menu, form validation, active links, and dynamic content.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Display the current year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle mobile navigation and update its accessible state.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu and highlight the selected link.
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    navItems.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Validate form values and show feedback without reloading the page.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";
  let valid = true;

  if (name.length < 2) {
    nameError.textContent = "Please enter at least 2 characters for your name.";
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (message.length < 10) {
    messageError.textContent = "Please enter at least 10 characters about your project.";
    valid = false;
  }
  if (!valid) {
    formStatus.style.color = "#b42318";
    formStatus.textContent = "Please correct the highlighted fields and try again.";
    return;
  }
  formStatus.style.color = "#18794e";
  formStatus.textContent = `Thanks, ${name}! The form passed validation. This demo does not send data to a server.`;
  contactForm.reset();
});

// Scroll to the top when the footer button is clicked.
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});