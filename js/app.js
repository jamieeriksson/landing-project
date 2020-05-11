/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/* ---- Begin function declarations ---- */

function addToNav(name, idAtt) {
  const navItem = document.createElement("li");
  navItem.id = `${idAtt}Nav`;
  const navLink = document.createElement("a");
  navLink.className = "menu__link";
  navLink.href = `#${idAtt}`;
  const navName = document.createTextNode(name);
  navLink.appendChild(navName);
  navItem.appendChild(navLink);
  document.getElementById("navbar__list").appendChild(navItem);

  // Add event listener to each nav item
  navLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(`#${idAtt}`).scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Function which sets the active class to a section when it has entered 75% into view
function setActive(entries) {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");

    if (entry.isIntersecting) {
      document.querySelector(".active").classList.remove("active");
      entry.target.classList.add("active");

      document.querySelector(".activeNav").classList.remove("activeNav");
      document.querySelector(`#${id}Nav`).classList.add("activeNav");
    }
  });
}

/* ---- Optional hiding of the nav bar when not scrolling ---- */
// function hideNav() {
//   if (window.scrollY < 150) {
//     document.querySelector(".page__header").style.top = "0px";
//   } else {
//     document.querySelector(".page__header").style.top = "-220px";
//   }
// }

/* ---- End function declarations ---- */

// Set up Intersection Observer for section active states functionality
let options = {
  rootMargin: "0px",
  threshold: 0.5,
};

let observer = new IntersectionObserver(setActive, options);

/* ---- Fill in navigation bar ---- */
// Get an array of all of the sections within landing page
const sections = Array.prototype.slice.call(
  document.querySelectorAll("section[data-nav]")
);

// Loop through each section and add to nav bar
for (section of sections) {
  // Add a new li element to the nav bar with .menu__link class (could maybe change this to a forEach loop?)
  const sectName = section.getAttribute("data-nav");
  const sectId = section.getAttribute("id");

  addToNav(sectName, sectId);

  // Create Intersection Observer target on each section to identify active states
  observer.observe(section);
}
/* ---- End filling in navigation bar ---- */

/* ---- Optional hiding of the nav bar when not scrolling ---- */
// Add event for hiding nav bar when not scrolling, nav bar will show at top of page
// window.addEventListener("scroll", function () {
//   setTimeout(function () {
//     hideNav();
//   }, 500);

//   document.querySelector(".page__header").style.top = "0px";
// });

// // Add event for showing nav bar when mouse hovers at top of page
// window.onmousemove = function () {
//   if (event.clientY < 50) {
//     document.querySelector(".page__header").style.top = "0px";
//   } else if (window.scrollY > 150) {
//     document.querySelector(".page__header").style.top = "-220px";
//   }
// };
