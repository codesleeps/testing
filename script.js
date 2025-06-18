document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchContainer = document.querySelector('.search-container');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchContainer.classList.toggle('active');
        
        // Animate hamburger to X
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && 
            !navLinks.contains(e.target) && 
            !searchContainer.contains(e.target)) {
            navLinks.classList.remove('active');
            searchContainer.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}); 