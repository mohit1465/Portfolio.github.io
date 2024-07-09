// Mobile Menu Toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
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
