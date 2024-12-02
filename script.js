const burger = document.querySelector(".mobile-menu");
const burgerFirst = document.querySelector(".menu--line:first-child");
const burgerSecond = document.querySelector(".menu--line:nth-child(2)");
const burgerThird = document.querySelector(".menu--line:last-child");
const nav = document.querySelector(".navbar-wrapper");
// const container = document.querySelector(".openAccount-slider-item");
const prevIcon = document.querySelector(".prev-icon");
const nextIcon = document.querySelector(".next-icon");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", function (e) {
  // Toggle the burger icon animations
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");

  // Toggle the navigation menu
  nav.classList.toggle("open");

  // Control body scrolling based on the menu state
  if (nav.classList.contains("open")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

// Close the menu when a navigation link is clicked
const navLinks = nav.querySelectorAll(".navbar-wrapper a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Close the navigation menu
    burgerFirst.classList.remove("line-1");
    burgerSecond.classList.remove("line-2");
    burgerThird.classList.remove("line-3");
    nav.classList.remove("open");

    // Restore body scrolling
    document.body.style.overflowY = "auto";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// const sliderItems = document.querySelectorAll(".sliderItem");

function scrollLeft() {
  const container = document.querySelector(".openAccount-slider-item");
  const cardWidth = container
    .querySelector(".sliderItem")
    .getBoundingClientRect().width;
  container.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
}

function scrollRight() {
  const container = document.querySelector(".openAccount-slider-item");
  const cardWidth = container
    .querySelector(".sliderItem")
    .getBoundingClientRect().width;
  container.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
}
function updateButtonState() {
  const container = document.querySelector(".openAccount-slider-item");
  if (container.scrollLeft === 0) {
    prevIcon.disabled = true;
  } else {
    prevIcon.disabled = false;
  }

  if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
    nextIcon.disabled = true;
  } else {
    nextIcon.disabled = false;
  }
}

document
  .querySelector(".openAccount-slider-item")
  .addEventListener("scroll", updateButtonState);

prevIcon.addEventListener("click", scrollLeft);
nextIcon.addEventListener("click", scrollRight);

document.addEventListener("DOMContentLoaded", () => {
  const featureCards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  featureCards.forEach((card) => observer.observe(card));
});
