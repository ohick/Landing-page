"use strict";
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
const mybutton = document.getElementById("myBtn");
const header = document.querySelector('.page__header');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

let timerHide = (el) => el.classList.add('hide');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let createNavBarChildren = (sections) => {
  let child = document.createDocumentFragment();
  for (const section of sections) {
    const data = section.getAttribute('data-nav');
    const href = section.getAttribute('id');
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${href}`;
    link.textContent = data;
    link.className = 'menu__link';
    link.id = `sct${data.slice(-1)}`;
    li.appendChild(link);
    child.appendChild(li);
  }
  return child;
};

// Add class 'active' to section when near top of viewport
let highlight = (sections) => {
  let flag = false;
  let classValue = 'your-active-class';
  for (const section of sections) {
    const position = section.getBoundingClientRect().top;
    const link = document.getElementById(`sct${section.id.slice(-1)}`);
    if (!flag && position >= -250) {
      section.classList.add(classValue)
      link.classList.add('your-active-link');
      flag = true;
    } else {
      section.classList.remove(classValue);
      link.classList.remove('your-active-link');
    }
  }
};

// Scroll to top button appears
let buttonShows = () => {
  if (window.scrollY) {
    mybutton.classList.remove('hide', 'fadeout');
    mybutton.classList.add('show-fadein');
  } else {
    mybutton.classList.remove('show-fadein');
    mybutton.classList.add('fadeout');
    setTimeout(() => timerHide(mybutton), 500);
  }
};

// Scroll to top event
let backToTop = () => {
  document.documentElement.scrollIntoView({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', navBar.appendChild(createNavBarChildren(sections)));

// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Set sections as active
Back to top button appears when scrolling */
document.addEventListener('scroll', () => {
  buttonShows();
  highlight(sections);
});

// Scroll to the top of the document
mybutton.addEventListener('click', () => backToTop());