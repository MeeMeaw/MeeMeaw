// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            
            // Enable scrolling after preloader is hidden
            document.body.style.overflow = 'auto';
        }, 1500);
    });
    
    // Disable scrolling while preloader is visible
    document.body.style.overflow = 'hidden';
});

// Paw prints following mouse
(function() {
    const pawPrints = [];
    const maxPaws = 10;
    let pawIndex = 0;

    // Create paw prints
    for (let i = 0; i < maxPaws; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw-print';
        paw.style.opacity = '0';
        document.body.appendChild(paw);
        pawPrints.push(paw);
    }

    // Handle mouse movement
    function handleMouseMove(e) {
        // Only add a paw print occasionally
        if (Math.random() > 0.92) {
            const paw = pawPrints[pawIndex];

            // Position the paw
            paw.style.left = `${e.clientX - 10}px`;
            paw.style.top = `${e.clientY - 10}px`;

            // Random rotation
            paw.style.transform = `rotate(${Math.random() * 360}deg)`;

            // Make it visible
            paw.style.opacity = '0.6';

            // Set a timeout to fade it out
            setTimeout(() => {
                paw.style.opacity = '0';
            }, 2000);

            // Increment the index
            pawIndex = (pawIndex + 1) % maxPaws;
        }
    }

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
})();

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Scroll animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || '0s';
                
                // Set delay
                element.style.transitionDelay = delay;
                
                // Add active class
                setTimeout(() => {
                    element.classList.add('active');
                }, 100);
                
                // Unobserve after animation
                observer.unobserve(element);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

// Scroll progress bar
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
});

// Scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
    
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add animation classes
document.addEventListener('DOMContentLoaded', function() {
    // Add animation-delay classes for blobs
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        if (index % 3 === 1) {
            blob.style.animationDelay = '2s';
        } else if (index % 3 === 2) {
            blob.style.animationDelay = '4s';
        }
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Apply parallax effect to different elements
        document.querySelectorAll('.hero-section, .cta-section').forEach(section => {
            const background = section.querySelector('.background-blobs');
            if (background) {
                background.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
        });
        
        // Move elements at different speeds
        document.querySelectorAll('.hero-content').forEach(element => {
            element.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        });
        
        document.querySelectorAll('.hero-image').forEach(element => {
            element.style.transform = `translateY(${scrollPosition * -0.05}px)`;
        });
    });
});

// Add scroll animations to sections when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-reveal');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                // Add a class to the body to change background color based on section
                if (entry.target.classList.contains('bg-white')) {
                    document.body.classList.add('light-section-visible');
                    document.body.classList.remove('dark-section-visible');
                } else {
                    document.body.classList.add('dark-section-visible');
                    document.body.classList.remove('light-section-visible');
                }
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});