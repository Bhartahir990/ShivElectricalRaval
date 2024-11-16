// Toggle Dark Mode
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load Dark Mode Preference
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Initialize dynamic content on the Learn More page
    if (window.location.pathname.includes('learn-more.html')) {
        loadDynamicContent();
    }
});

// Load dynamic content for Learn More page
function loadDynamicContent() {
    const contentContainer = document.querySelector('.content .container');

    if (contentContainer) {
        contentContainer.innerHTML += `
            <h3>Why Choose Us?</h3>
            <p>Our modern templates are designed with flexibility and customization in mind. Whether you're building a personal blog or a professional portfolio, we've got you covered.</p>
            <h3>Get Started Today</h3>
            <p>Contact us to learn more about our services or explore the possibilities of your next project. We're here to help!</p>
        `;
    }
}

// Smooth Scroll for Links (Optional)
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
// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});