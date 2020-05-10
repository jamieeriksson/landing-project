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

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const sections = Array.prototype.slice.call(
  document.querySelectorAll("section[data-nav]")
);

// Add a new li element to the nav bar with .menu__link class (could maybe change this to a forEach loop?)
for (section of sections) {
  const sectName = section.getAttribute("data-nav");
  const sectId = section.getAttribute("id");

  const navItem = document.createElement("li");
  document.getElementById("navbar__list").appendChild(navItem);
  navItem.insertAdjacentHTML(
    "afterbegin",
    `<a class= "menu__link" href="#${sectId}">${sectName}</a>`
  );
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
