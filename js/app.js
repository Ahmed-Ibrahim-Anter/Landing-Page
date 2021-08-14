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

let prescroll = window.pageYOffset;
const myheader = document.getElementById('header');
const sections = Array.from(document.querySelectorAll("section"));
const myUl = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navHide() {
    let currentScroll = window.pageYOffset;
    if (prescroll > currentScroll) {
        myheader.style.top = "0";
    }
    else {
        myheader.style.top = "-70px";
    };
    prescroll = currentScroll;
}
function addClass() {
    return window.addEventListener('scroll', () => {

        for (const section of sections) {
            const view = section.getBoundingClientRect();
            if ((view.top >= 0)
                && (view.left >= 0)
                && (view.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                && (view.right <= (window.innerWidth || document.documentElement.clientWidth))) {
                section.classList.add("your-active-class");

            } else { section.classList.remove("your-active-class"); }
        };
        navHide();
        
    }, );
}
function mySelector() {
    return myUl.addEventListener('click', function (evt) {
        if (evt.target.nodeName === 'LI') {
            for (const section of sections) {
                if (evt.target.textContent === section.getAttribute('data-nav')) {
                    section.scrollIntoView({ behavior: 'smooth' });

                }
            }


        }
    });
}


/**
 * End Helper Functions
 * Begin Main Functions

*/
function addnav() {

    const dFrag = document.createDocumentFragment();
    for (const section of sections) {
        const newLi = document.createElement("LI");
        newLi.className = "menu__link navbar__menu li ";
        newLi.textContent = section.getAttribute('data-nav');
        dFrag.appendChild(newLi);
    }
    myUl.appendChild(dFrag);
    mySelector();
    addClass();

};

addnav();




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
