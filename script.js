// Navigation bar sticky effect on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Responsive navigation sidebar menu
window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a");

  if (menuBtn && navigation) {
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
  }

  // Scroll to top button functionality
  const scrollBtn = document.querySelector(".scrollToTop-btn");

  window.addEventListener("scroll", function () {
    if (scrollBtn) {
      scrollBtn.classList.toggle("active", window.scrollY > 500);
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  // Reveal website elements on scroll
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  // Dark mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    function toggleDarkMode() {
      const isDark = document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = isDark ? "☀️ " : "🌙 ";
      localStorage.setItem("darkMode", isDark);
    }

    toggleBtn.addEventListener("click", toggleDarkMode);

    // Load saved theme
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️ ";
    }
  }

  // WhatsApp sender
  window.sendToWhatsapp = function () {
    const number = "+919914805645";

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const url =
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
  };

  // Slider auto-scroll and manual scroll
  const track = document.getElementById("sliderTrack");
  const container = document.getElementById("sliderContainer");

  if (track && container) {
    let offset = 0;
    const speed = 1;
    let animationId;
    const cardWidth = 320;
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

    window.slideNext = function () {
      offset += cardWidth;
      if (offset >= (cardWidth * totalCards) / 2) {
        offset = 0;
      }
      track.style.transform = `translateX(-${offset}px)`;
    };

    window.slidePrev = function () {
      offset -= cardWidth;
      if (offset < 0) {
        offset = (cardWidth * totalCards) / 2 - cardWidth;
      }
      track.style.transform = `translateX(-${offset}px)`;
    };

    animateSlider(); // Start auto slide
  }
});
