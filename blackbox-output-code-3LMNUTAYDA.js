AOS.init();

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// For demo, create a simple particles config inline or load from file
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "repulse" } }
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Integrate with backend for real email sending
    } else {
        alert('Please fill in all fields.');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});