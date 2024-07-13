var animationSpeed = 1000; // Adjust animation speed in milliseconds (1s = 1000ms)

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


(function () {

      const link = document.querySelectorAll('nav > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();