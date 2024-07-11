// Function to close mobile menu
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('cross');
    var mobNavs = document.querySelectorAll('.mob-nav');
    for (var i = 0; i < mobNavs.length; i++) {
        if (this.classList.contains('cross')) {
            mobNavs[i].style.display = 'flex';
            mobNavs[i].style.animation = 'slideInRight 0.5s forwards';
        } else {
            mobNavs[i].style.animation = 'none';
            mobNavs[i].style.display = 'none';
        }
    }
});



function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'none';
}

// Mobile Menu Toggle
document.getElementById('hamburger').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click from bubbling up and triggering the document click listener
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.getComputedStyle(mobileMenu).display === 'none') {
        mobileMenu.style.display = 'flex';
    } else {
        closeMobileMenu();
    }
});

// Close mobile menu when clicking navigation items
const navLinks = document.querySelectorAll('#mobile-menu ul li a');
navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
        closeMobileMenu();
    });
});

// Close mobile menu when switching from mobile to desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) { // Assuming 768px is the breakpoint for desktop view
        closeMobileMenu();
    }
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!mobileMenu.contains(event.target) && event.target !== hamburger) {
        mobileMenu.style.display = 'none';
    }
});

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
