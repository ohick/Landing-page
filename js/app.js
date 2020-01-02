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

const sections = document.querySelectorAll('section[data-nav]');
const navBar = document.getElementById('navbar__list');


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

//createNavBar(sections, navBar);

let createNavBar = (sections, navBar) => {
  for (const section of sections) {
    const data = section.getAttribute('data-nav');
    const href = section.getAttribute('id');

    const navList = document.createElement('li');
    const link = document.createElement('a');
    link.href=`#${href}`;
    link.textContent=data;
    link.className="menu__link";
    //console.log(link);
    //navList.innerHTML = `<a href="#${href}" class = "menu__link">${data}</a>`;
    navList.appendChild(link);
    //console.log(navList);

    navBar.appendChild(navList);
  }
  return navBar;
};


// Add class 'active' to section when near top of viewport

let highlight = () => {
  let flag = false;

  for (const section of sections) {
    const position = section.getBoundingClientRect().top;
    if (!flag && position > 0) {
      section.classList.add("your-active-class");
      flag = true;
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

// Scroll to anchor ID using scrollTO event

let scrolling = () => {
  let hashValue = item.getAttribute("href");
  let target = document.querySelector(hashValue);
  target.scrollIntoView({
    behavior: 'smooth',
  })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener("DOMContentLoaded", createNavBar(sections, navBar));

// Scroll to section on link click


// Set sections as active

document.addEventListener("scroll", highlight);




