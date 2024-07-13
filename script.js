var animationSpeed = 1000; // Adjust animation speed in milliseconds (1s = 1000ms)

document.addEventListener('contextmenu', event=> event.preventDefault()); 
document.onkeydown = function(e) { 
if(event.keyCode == 123) { 
return false; 
} 
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
return false; 
} 
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
return false; 
} 
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
return false; 
} 
} 

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


var customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', function(e) {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
    customCursor.style.display = 'block'; // Show the cursor when moving
});

document.addEventListener('mouseenter', function() {
    customCursor.style.display = 'block'; // Show the cursor when entering the window
});

document.addEventListener('mouseleave', function() {
    customCursor.style.display = 'none'; // Hide the cursor when leaving the window
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