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

  for (let section of sections) {
      const navList = document.createElement('li');
      const links = document.createElement('a');
      links.textContent = section.querySelector('h2').textContent;
      links.href = `#${links.textContent.replace(/\s+/g, '').toLowerCase()}`;
      navList.appendChild(links);
      document.getElementById('navbar__list').appendChild(navList);
    }
  

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


