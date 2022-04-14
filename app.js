//sticky navigation
const sectionHeroElem = document.querySelector(".particles");
//intersection observer
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
  }
);
observer.observe(sectionHeroElem);
//Tabbed component
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  const element = e.target.closest(".operations__tab");
  if (!element) return;
  tabs.forEach(function (tab) {
    tab.classList.remove("operations__tab--active");
  });
  tabContent.forEach(function (content) {
    content.classList.remove("operations__content--active");
  });
  element.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${element.dataset.tab}`)
    .classList.add("operations__content--active");
});
// Slider component
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currSlide = 0;
let maxSlides = slides.length;

const moveSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%`)
  );
};
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// in order to provide the desired positions to the slides we will pass 0 to the moveslide function, which will result in 0% 100%, 200%
moveSlide(0);
const moveAhead = function () {
  if (currSlide === maxSlides - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  moveSlide(currSlide);
};
const moveBehind = function () {
  if (currSlide === 0) {
    currSlide = maxSlides - 1;
  } else {
    currSlide--;
  }
  moveSlide(currSlide);
};

btnRight.addEventListener("click", moveAhead);
btnLeft.addEventListener("click", moveBehind);
// handling arrow keys
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveBehind();
  } else if (e.key === "ArrowRight") {
    moveAhead();
  }
});
//making the dots work
const createDots = function () {
  slides.forEach(_, i);
};
//implementing page navigation
const nav = document.querySelector(".main-nav-list");
const navLinks = document.querySelectorAll(".main-nav-link");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// Revealing sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//lazy image
const img = document.querySelectorAll("img[data-src]");
const revealImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
img.forEach((i) => imgObserver.observe(i));
// skills section animation
const skills = document.querySelector(".skills-grid");
const skill = document.querySelectorAll(".skills-grid-row");

const animateSkills = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  const id = skills.querySelectorAll(".animate__skill");

  id.forEach((i) => i.classList.add("skill-animation"));
  observer.unobserve(entry.target);
};
const skillSection = new IntersectionObserver(animateSkills, {
  root: null,
  threshold: 0.2,
});
skill.forEach((s) => skillSection.observe(s));
// Mobile Navigation
const btnContainer = document.querySelector(".btn-mobile-nav");

const icon = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector("header");
btnContainer.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    header.classList.toggle("nav-open");
  }
});
