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

for (section of sections) {
  // Add a new li element to the nav bar with .menu__link class (could maybe change this to a forEach loop?)
  const sectName = section.getAttribute("data-nav");
  const sectId = section.getAttribute("id");

  const navItem = document.createElement("li");
  const linkClass = document.createAttribute("class");
  linkClass.value = "menu__link";
  navItem.setAttributeNode(linkClass);
  const navName = document.createTextNode(section.getAttribute("data-nav"));
  navItem.appendChild(navName);
  document.getElementById("navbar__list").appendChild(navItem);

  // Add event listener to each nav item
  navItem.addEventListener("click", function () {
    document.querySelector(`#${sectId}`).scrollIntoView({
      behavior: "smooth",
    });
  });
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
