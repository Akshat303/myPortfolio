//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

function sendToWhatsapp() {
  let number = "+919914805645";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  var url =
    "https://wa.me/" +
    number +
    "?text=" +
    "Name : " +
    name +
    "%0a" +
    "Mobile no. : " +
    phone +
    "%0a" +
    "Email : " +
    email +
    "%0a" +
    "Message : " +
    message +
    "%0a%0a";

  window.open(url, "_blank").focus();
}

// ================================

const toggleBtn = document.getElementById("darkModeToggle");

// Function to switch mode and update button text
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");

  // Change button text
  toggleBtn.textContent = isDark ? "☀️ " : "🌙 ";

  // Save preference
  localStorage.setItem("darkMode", isDark);
}

// Add click event
toggleBtn.addEventListener("click", toggleDarkMode);

// Load preference and set button text on page load
window.addEventListener("load", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ ";
  }
});

const track = document.getElementById("sliderTrack");
const container = document.getElementById("sliderContainer");
let offset = 0;
const speed = 1; // px per frame
let animationId;
const cardWidth = 320; // including margin
const totalCards = track.children.length;

function animateSlider() {
  offset += speed;
  if (offset >= (cardWidth * totalCards) / 2) {
    offset = 0;
  }
  track.style.transform = `translateX(-${offset}px)`;
  animationId = requestAnimationFrame(animateSlider);
}

container.addEventListener("mouseenter", () => {
  cancelAnimationFrame(animationId);
});

container.addEventListener("mouseleave", () => {
  animateSlider();
});

function slideNext() {
  offset += cardWidth;
  if (offset >= (cardWidth * totalCards) / 2) {
    offset = 0;
  }
  track.style.transform = `translateX(-${offset}px)`;
}

function slidePrev() {
  offset -= cardWidth;
  if (offset < 0) {
    offset = (cardWidth * totalCards) / 2 - cardWidth;
  }
  track.style.transform = `translateX(-${offset}px)`;
}

animateSlider(); // start auto sliding
