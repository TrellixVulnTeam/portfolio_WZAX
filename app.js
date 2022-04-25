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
// experience section position
const exp = document.getElementById("experience");

const removeOverflow = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    console.log("is intersecting");
    document.body.classList.remove("body-container");
  } else {
    document.body.classList.add("body-container");
  }
};
const expSection = new IntersectionObserver(removeOverflow, {
  root: null,
  threshold: 0.2,
});
expSection.observe(exp);
///Cards component
const projects = [
  {
    title: "The Ipod Project",
    img: "./assets/ipod.jpg",
    list: ["ReactJs", "JSX", "CSS", "JavaScript"],
    backTitle: "Project Using",
    backPara: "React",
    liveLink: "https://ipodbyakshays05.netlify.app/",
    githubLink: "https://github.com/AkshayS05/Ipod-project-in-react",
  },
  {
    title: "The Pokemon Project",
    img: "./assets/ipod.jpg",
    list: ["ReactJs", "JSX", "Advanced CSS", "JavaScript"],
    backTitle: "Project Using",
    backPara: "React",
    liveLink: "https://pokemonmatch-as05.netlify.app/",
    githubLink: "https://github.com/AkshayS05/pokemon-match-react-app/",
  },
  {
    title: "Awesome Food Project",
    img: "./assets/awesomefood.jpg",
    list: ["ReactJs", "CSS", "JavaScript", "Web Design"],
    backTitle: "Project Using",
    backPara: "HTML, CSS, JS",
    liveLink: "https://omnifoodbyakshays05.netlify.app/",
    githubLink: "#",
  },
  {
    title: "Recipe Finder Project",
    img: "./assets/recipe.jpg",
    list: ["ReactJs", "JSX", "CSS", "JavaScript"],
    backTitle: "Project Using",
    backPara: "React",
    liveLink: "https://awesome-recipes-5dd0e.web.app/",
    githubLink: "https://github.com/AkshayS05/recipeFinder",
  },
  {
    title: "TODO NODE JS APP",
    img: "./assets/todo.jpg",
    list: ["Mongo DB", "Express Js", "EJS", "NodeJs"],
    backTitle: "Project Using",
    backPara: "NodeJs",
    liveLink: "#",
    githubLink: "https://github.com/AkshayS05/Todo-App",
  },
  {
    title: "DS & ALGO IN JAVA",
    img: "./assets/java.jpg",
    list: ["Sorting Algos", "Searching Algos", "Data Structures", "OOP"],
    backTitle: "DS & ALGO IN",
    backPara: "JAVA",
    liveLink: "#",
    githubLink: "https://github.com/AkshayS05/Binary_Search",
  },
  {
    title: "Awesome Code Bank",
    img: "./assets/bankapp.jpg",
    list: ["Dates & Timers", "Array Methods", "Method Chaining", "Loops"],
    backTitle: "Bank App",
    backPara: "By Jonas",
    liveLink: "https://awesomecodebank.netlify.app/",
    githubLink: "https://github.com/AkshayS05/bankApp",
  },
];

const elem = document.querySelector(".slider");

projects.forEach((project, i) => {
  const html = `
<div class="slide">
  <div class="col-${i + 1}">
    <div class="card">
      <div class="card__side card__side--front">
        <div class="card__picture card__picture--${i + 1}">&nbsp;</div>

        <h4 class="card__heading">
          <span class="card__heading-span card__heading-span--${i + 1}">
            ${project.title}
          </span>
        </h4>
        <div class="card__details">
          <ul>
            <li><i class="fa-solid fa-check"></i>${project.list[0]}</li>
            <li><i class="fa-solid fa-check"></i>${project.list[1]}</li>
            <li><i class="fa-solid fa-check"></i>${project.list[2]}</li>
            <li><i class="fa-solid fa-check"></i>${project.list[3]}</li>
         
          </ul>
        </div>
      </div>
      <!-- back -->
      <div class="card__side card__side--back card__side--back-${i + 1}">
        <div class="card__cta">
          <div class="card__text-box">
            <p class="card__project">${project.backTitle}</p>
            <p class="card__name">${project.backPara}</p>
          </div>
          <a href=${project.liveLink} class= "btn--effect btn--effect--white"
    target="_blank">View Live</a>
          <a href=${
            project.githubLink
          } class="btn--git btn--git--black" target="_blank"><span><i class="fa-brands fa-github"></i></span>Github</a>
         
        </div>
      </div>
    </div>
  </div>
  </div>`;
  elem.insertAdjacentHTML("beforeend", html);
});
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
