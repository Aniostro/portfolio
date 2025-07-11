// Portfolio JavaScript - Modern Interactions and Animations

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.initializeVariables();
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeAnimations();
        this.initializeNavigation();
        this.initializeProjects();
        this.initializeContact();
        this.initializeScrollEffects();
        this.initializeCounters();
        this.createParticles();
    }

    initializeVariables() {
        // Navigation elements
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.navToggle = document.getElementById('nav-toggle');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Theme toggle
        this.themeToggle = document.getElementById('theme-toggle');
        
        // Scroll elements
        this.scrollIndicator = document.querySelector('.scroll-indicator');
        this.animateElements = document.querySelectorAll('.animate-on-scroll');
        
        // Project elements
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        
        // Contact form
        this.contactForm = document.getElementById('contact-form');
        
        // Counter elements
        this.counters = document.querySelectorAll('.stat-number');
        this.countersAnimated = false;
        
        // Scroll position
        this.lastScrollTop = 0;
    }

    setupEventListeners() {
        // Navigation toggle
        this.navToggle?.addEventListener('click', () => this.toggleMobileNav());
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Theme toggle
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
        
        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        
        // Project filter
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.filterProjects(e));
        });
        
        // Contact form
        this.contactForm?.addEventListener('submit', (e) => this.handleContactSubmit(e));
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.smoothScroll(e));
        });
        
        // Scroll indicator click
        this.scrollIndicator?.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Theme Management
    initializeTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.setTheme(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        const icon = this.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Navigation Management
    toggleMobileNav() {
        this.navMenu?.classList.toggle('active');
        this.navToggle?.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 
            this.navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    handleNavClick(e) {
        const href = e.target.getAttribute('href');
        
        // Close mobile menu
        if (this.navMenu?.classList.contains('active')) {
            this.toggleMobileNav();
        }
        
        // Update active nav link
        this.updateActiveNavLink(e.target);
        
        // Smooth scroll to section
        if (href?.startsWith('#')) {
            e.preventDefault();
            this.smoothScroll(e);
        }
    }

    updateActiveNavLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    smoothScroll(e) {
        e.preventDefault();
        const href = e.target.getAttribute('href') || e.currentTarget.getAttribute('href');
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navHeight = this.navbar?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Scroll Effects
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navbar background
        this.updateNavbarBackground(scrollTop);
        
        // Update active section
        this.updateActiveSection();
        
        // Animate elements on scroll
        this.animateOnScroll();
        
        // Update scroll indicator
        this.updateScrollIndicator(scrollTop);
        
        // Animate counters
        this.animateCounters();
        
        // Update last scroll position
        this.lastScrollTop = scrollTop;
    }

    updateNavbarBackground(scrollTop) {
        if (scrollTop > 100) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = this.navbar?.offsetHeight || 0;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (correspondingNavLink) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    updateScrollIndicator(scrollTop) {
        if (this.scrollIndicator) {
            this.scrollIndicator.style.opacity = scrollTop > 100 ? '0' : '1';
        }
    }

    handleResize() {
        // Close mobile menu on resize
        if (window.innerWidth > 768 && this.navMenu?.classList.contains('active')) {
            this.toggleMobileNav();
        }
    }

    // Animation Management
    initializeAnimations() {
        // Initial animation for hero elements
        this.animateHeroElements();
        
        // Setup intersection observer for scroll animations
        this.setupScrollAnimations();
    }

    animateHeroElements() {
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroText) {
            heroText.style.animation = 'fadeInLeft 1s ease forwards';
        }
        
        if (heroImage) {
            heroImage.style.animation = 'fadeInRight 1s ease 0.3s forwards';
        }
    }

    setupScrollAnimations() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Optional: Stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, options);

        this.animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    animateOnScroll() {
        this.animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementTop < window.innerHeight && elementBottom > 0;
            
            if (isVisible && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }

    // Counter Animation
    animateCounters() {
        if (this.countersAnimated) return;
        
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionVisible = sectionTop < window.innerHeight * 0.8;
        
        if (sectionVisible) {
            this.countersAnimated = true;
            
            this.counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 50; // Animation speed
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    }

    // Project Management
    initializeProjects() {
        // Add hover effects to project cards
        this.projectCards.forEach(card => {
            this.addProjectCardEffects(card);
        });
    }

    addProjectCardEffects(card) {
        const image = card.querySelector('.project-image img');
        const overlay = card.querySelector('.project-overlay');
        
        card.addEventListener('mouseenter', () => {
            if (image) image.style.transform = 'scale(1.1)';
            if (overlay) overlay.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            if (image) image.style.transform = 'scale(1)';
            if (overlay) overlay.style.opacity = '0';
        });
    }

    filterProjects(e) {
        e.preventDefault();
        const filterValue = e.target.getAttribute('data-filter');
        
        // Update active filter button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter project cards
        this.projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const shouldShow = filterValue === 'all' || cardCategory === filterValue;
            
            if (shouldShow) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Contact Form Management
    initializeContact() {
        // Add floating label effects
        this.setupFloatingLabels();
    }

    setupFloatingLabels() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                input.addEventListener('focus', () => {
                    label.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.classList.remove('focused');
                    }
                });
                
                // Check if input has value on load
                if (input.value) {
                    label.classList.add('focused');
                }
            }
        });
    }

    handleContactSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (this.validateContactForm(data)) {
            this.submitContactForm(data);
        }
    }

    validateContactForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!data.subject || data.subject.trim().length < 3) {
            errors.push('Subject must be at least 3 characters long');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            this.showFormErrors(errors);
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFormErrors(errors) {
        // Remove existing error messages
        const existingErrors = document.querySelectorAll('.form-error');
        existingErrors.forEach(error => error.remove());
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            color: var(--error-color);
            background: rgba(239, 68, 68, 0.1);
            padding: var(--space-3);
            border-radius: var(--radius-md);
            margin-bottom: var(--space-4);
            border: 1px solid rgba(239, 68, 68, 0.3);
        `;
        
        const errorList = document.createElement('ul');
        errorList.style.margin = '0';
        errorList.style.paddingLeft = '1rem';
        
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error;
            errorList.appendChild(errorItem);
        });
        
        errorDiv.appendChild(errorList);
        this.contactForm.insertBefore(errorDiv, this.contactForm.firstChild);
        
        // Scroll to form
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    submitContactForm(data) {
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            this.showFormSuccess();
            this.contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Remove floating label states
            document.querySelectorAll('.form-group label').forEach(label => {
                label.classList.remove('focused');
            });
        }, 2000);
        
        // Log form data (for development)
        console.log('Form submitted:', data);
    }

    showFormSuccess() {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-error, .form-success');
        existingMessages.forEach(msg => msg.remove());
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            color: var(--success-color);
            background: rgba(16, 185, 129, 0.1);
            padding: var(--space-4);
            border-radius: var(--radius-md);
            margin-bottom: var(--space-4);
            border: 1px solid rgba(16, 185, 129, 0.3);
            text-align: center;
            animation: fadeInUp 0.5s ease forwards;
        `;
        
        successDiv.innerHTML = `
            <i class="fas fa-check-circle" style="margin-right: var(--space-2);"></i>
            Thank you! Your message has been sent successfully. I'll get back to you soon.
        `;
        
        this.contactForm.insertBefore(successDiv, this.contactForm.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => successDiv.remove(), 500);
        }, 5000);
    }

    // Scroll Effects and Parallax
    initializeScrollEffects() {
        this.setupParallaxEffects();
        this.setupScrollProgress();
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-particles, .floating-elements');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                if (element) {
                    element.style.transform = `translateY(${rate}px)`;
                }
            });
        });
    }

    setupScrollProgress() {
        // Create scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Particle Effects
    createParticles() {
        const particleContainer = document.querySelector('.hero-particles');
        if (!particleContainer) return;
        
        const particleCount = window.innerWidth > 768 ? 20 : 10;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                this.createParticle(particleContainer);
            }, i * 100);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(79, 70, 229, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
        `;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 20000);
    }

    // Utility Methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// CSS Animation for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    [data-theme="dark"] .navbar.scrolled {
        background: rgba(17, 24, 39, 0.98) !important;
    }
`;
document.head.appendChild(particleStyle);

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for external use
window.Portfolio = Portfolio;
