







document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const handleScroll = () => {
    scrollElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  const loadElements = document.querySelectorAll(".animate-on-load");

  loadElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll-contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const galleryTitle = document.querySelector(".gallery-section h2");
  const galleryCards = document.querySelectorAll(".gallery-section .card");

  if (isElementInViewport(galleryTitle)) {
    galleryTitle.classList.add("animate");
  }

  galleryCards.forEach((card, index) => {
    if (isElementInViewport(card)) {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    }
  });
}

window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("scrolled");
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
