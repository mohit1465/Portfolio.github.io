var animationSpeed = 1000; // Adjust animation speed in milliseconds (1s = 1000ms)

// document.addEventListener('contextmenu', event=> event.preventDefault()); 
// document.onkeydown = function(e) { 
// if(event.keyCode == 123) { 
// return false; 
// } 
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
// return false; 
// } 
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
// return false; 
// } 
// if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
// return false; 
// } 
// } 

function toggleMenu() {
    var hamburger = document.getElementById('hamburger');
    var mobNavs = document.querySelectorAll('.mob-nav');
    var content = document.querySelector('.content');
    hamburger.classList.toggle('cross');
    if (hamburger.classList.contains('cross')) {
        for (var i = 0; i < mobNavs.length; i++) {
            mobNavs[i].style.animation = `slideInRight ${animationSpeed / 1000}s forwards ${i * 0}s`; // Adjusted animation speed
            setTimeout((function(nav, index) {
                return function() {
                    nav.style.display = 'flex';
                    content.classList.add('hide-content'); // Slide down content
                };
            })(mobNavs[i], i), i * 200); // Adjust delay timing
        }
    } else {
        for (var i = 0; i < mobNavs.length; i++) {
            mobNavs[i].style.animation = 'none';
            mobNavs[i].style.display = 'none';
        }
        content.classList.remove('hide-content'); // Remove slide down effect
    }
}

function closeMenu() {
    var hamburger = document.getElementById('hamburger');
    var mobNavs = document.querySelectorAll('.mob-nav');
    var content = document.querySelector('.content');
    hamburger.classList.remove('cross');
    for (var i = 0; i < mobNavs.length; i++) {
        mobNavs[i].style.animation = 'none';
        mobNavs[i].style.display = 'none';
    }
    content.classList.remove('hide-content'); // Remove slide down effect
}

document.getElementById('hamburger').addEventListener('click', toggleMenu);

window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        closeMenu();
    }
});

document.body.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.main').contains(event.target) || document.querySelector('.mob-nav').contains(event.target);
    if (!isClickInside) {
        closeMenu();
    }
});

var mobNavLinks = document.querySelectorAll('.mob-nav a');
for (var i = 0; i < mobNavLinks.length; i++) {
    mobNavLinks[i].addEventListener('click', closeMenu);
}

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (!name || !email || !phone || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

 // JavaScript to move the custom cursor
 document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

window.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (e.clientX < 0 || e.clientY < 0 || e.clientX > viewportWidth || e.clientY > viewportHeight) {
        cursor.style.display = 'none'; // Hide the cursor if outside viewport
    }
});


document.addEventListener('click', function(e) {
    createRipple(e.clientX, e.clientY);
});

function createRipple(x, y) {
    for (let i = 0; i < 2; i++) {
        var ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = (x - 50) + 'px'; // Adjust to position correctly
        ripple.style.top = (y - 50) + 'px'; // Adjust to position correctly
        document.body.appendChild(ripple);

        // Remove the ripple after animation is complete
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    }
}



// Hide sections by default
document.addEventListener('DOMContentLoaded', function () {
    const hiddenSections = document.querySelectorAll('.hidden-section');
    hiddenSections.forEach(section => {
        section.style.display = 'none';
    });

    // When "Hey, I am Mohit" is clicked
    const mainHeading = document.getElementById('mainHeading');
    mainHeading.addEventListener('click', function () {
        hiddenSections.forEach(section => {
            section.style.display = 'block'; // Show hidden sections
        });
    });
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Hide both "View All Work" and "View All Gallery" buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.add('hidden'));
}


// Initial load - show introduction
window.onload = function() {
    document.getElementById('introduction').style.display = 'block';
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('work').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('why-me').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    document.getElementsByClassName('button').style.display = 'block';
};


const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    },
    { threshold: 0.1 } // Trigger animation when 10% of the element is visible
);

fadeInElements.forEach(el => observer.observe(el));


gsap.from(".work-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".work-images",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});












function openPopup(element) {
    // Find the parent work-item
    let workItem = element.closest('.work-item');

    // Get image, title, and description
    let imgSrc = workItem.querySelector('img').src;
    let title = workItem.querySelector('h3').innerText;
    let description = workItem.querySelector('p').innerText;

    // Update the popup content
    document.getElementById('popup-img').src = imgSrc;
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;

    // Show the popup and overlay
    document.querySelector('.popup-box').style.display = 'flex';
    document.querySelector('.overlay').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup-box').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}


