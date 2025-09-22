// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Home Page Interactive Button
const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Subject validation
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (subject.value.trim().length < 5) {
            subjectError.textContent = 'Subject must be at least 5 characters long';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }

        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            // Simulate form submission
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        if (img.classList.contains('lazy')) {
            imageObserver.observe(img);
        }
    });
});
