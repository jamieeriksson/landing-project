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

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Function which sets the active class to a section when it has entered 75% into view
function setActive(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.getAttribute("id"));
      document.querySelector(".active").classList.remove("active");
      entry.target.classList.add("active");
    }
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// Create scroll active functionality with Intersection Observer
let options = {
  rootMargin: "0px",
  threshold: 0.75,
};

let observer = new IntersectionObserver(setActive, options);

// Create array of all of the sections within landing page
const sections = Array.prototype.slice.call(
  document.querySelectorAll("section[data-nav]")
);

for (section of sections) {
  // Add a new li element to the nav bar with .menu__link class (could maybe change this to a forEach loop?)
  const sectName = section.getAttribute("data-nav");
  const sectId = section.getAttribute("id");

  const navItem = document.createElement("li");

  const navLink = document.createElement("a");
  const linkClass = document.createAttribute("class");
  linkClass.value = "menu__link";
  navLink.setAttributeNode(linkClass);
  const navAnchor = document.createAttribute("href");
  navAnchor.value = `#${sectId}`;
  navLink.setAttributeNode(navAnchor);
  const navName = document.createTextNode(section.getAttribute("data-nav"));
  navLink.appendChild(navName);
  navItem.appendChild(navLink);

  document.getElementById("navbar__list").appendChild(navItem);

  // Add event listener to each nav item
  navLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(`#${sectId}`).scrollIntoView({
      behavior: "smooth",
    });
  });

  // Create Intersection Observer target on each section
  observer.observe(section);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
