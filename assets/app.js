/**
 * OBSID-Studio - Main Application JavaScript
 * Handles interactions, animations, and dynamic content
 */

// ============================================
// DOM Content Loaded
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initLanguageSwitcher();
    initScreenshotsLightbox();
    initFAQ();
    initScrollAnimations();
    initBetaCounter();
    initSmoothScroll();
});

// ============================================
// Header Scroll Effect
// ============================================
function initHeader() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// Language Switcher
// ============================================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get selected language
            const lang = btn.dataset.lang;
            
            // Store preference
            localStorage.setItem('obsid-lang', lang);
            
            // Show notification (optional)
            showLanguageNotification(lang);
        });
    });
    
    // Load saved preference
    const savedLang = localStorage.getItem('obsid-lang');
    if (savedLang) {
        const savedBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (savedBtn) {
            langButtons.forEach(b => b.classList.remove('active'));
            savedBtn.classList.add('active');
        }
    }
}

function showLanguageNotification(lang) {
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.textContent = `Langue : ${lang.toUpperCase()}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 15px 25px;
        background: linear-gradient(135deg, #8B5CF6, #22D3EE);
        color: #050508;
        font-weight: 600;
        border-radius: 12px;
        z-index: 10000;
        animation: slideIn 0.3s ease, slideOut 0.3s ease 2s forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 2500);
}

// ============================================
// Screenshots Lightbox
// ============================================
function initScreenshotsLightbox() {
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentIndex = 0;
    const screenshots = [];
    
    // Collect all screenshots
    screenshotItems.forEach((item, index) => {
        const img = item.querySelector('.screenshot-img');
        const caption = item.dataset.caption || `Screenshot ${index + 1}`;
        
        screenshots.push({
            src: img.src,
            alt: img.alt,
            caption: caption
        });
        
        // Click to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Navigation
    lightboxPrev.addEventListener('click', () => {
        navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener('click', () => {
        navigateLightbox(1);
    });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });
    
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function navigateLightbox(direction) {
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = screenshots.length - 1;
        } else if (currentIndex >= screenshots.length) {
            currentIndex = 0;
        }
        
        updateLightbox();
    }
    
    function updateLightbox() {
        const screenshot = screenshots[currentIndex];
        lightboxImg.src = screenshot.src;
        lightboxImg.alt = screenshot.alt;
        lightboxCaption.textContent = screenshot.caption;
    }
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .screenshot-item, .faq-item, .pricing-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.animationDelay = `${delay}ms`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Add fade-in class and observe
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.dataset.delay = index * 100;
        observer.observe(el);
    });
    
    // Also observe section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });
}

// ============================================
// Beta Counter
// ============================================
function initBetaCounter() {
    const betaCounter = document.getElementById('betaCounter');
    const remainingSpots = document.getElementById('remainingSpots');
    
    // Total spots
    const totalSpots = 100;
    
    // Get sold spots from localStorage (simulation)
    let soldSpots = parseInt(localStorage.getItem('obsid-sold-spots')) || 0;
    
    // Update display
    function updateCounter() {
        const available = totalSpots - soldSpots;
        
        if (betaCounter) {
            betaCounter.textContent = `${available} places disponibles`;
        }
        
        if (remainingSpots) {
            remainingSpots.textContent = `${available} places disponibles`;
        }
        
        // Update progress bar (optional)
        updateProgressBar(soldSpots, totalSpots);
    }
    
    // Simulate sales (for demo purposes)
    function simulateSales() {
        // In a real scenario, this would be fetched from a server
        // For now, we'll use a random increment
        const randomIncrement = Math.floor(Math.random() * 3);
        soldSpots = Math.min(soldSpots + randomIncrement, totalSpots);
        localStorage.setItem('obsid-sold-spots', soldSpots);
        updateCounter();
        
        // Continue simulation if spots available
        if (soldSpots < totalSpots) {
            setTimeout(simulateSales, 10000 + Math.random() * 20000);
        }
    }
    
    // Create progress bar
    function updateProgressBar(sold, total) {
        const progressBar = document.createElement('div');
        progressBar.className = 'beta-progress';
        progressBar.style.cssText = `
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 10px;
        `;
        
        const progressFill = document.createElement('div');
        progressFill.style.cssText = `
            height: 100%;
            width: ${(sold / total) * 100}%;
            background: linear-gradient(90deg, #8B5CF6, #22D3EE);
            border-radius: 2px;
            transition: width 0.5s ease;
        `;
        
        progressBar.innerHTML = '';
        progressBar.appendChild(progressFill);
        
        // Add to beta counter container
        const counterContainer = betaCounter?.parentElement;
        if (counterContainer && !counterContainer.querySelector('.beta-progress')) {
            counterContainer.appendChild(progressBar);
        }
    }
    
    // Initial update
    updateCounter();
    
    // Start simulation (only in development)
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
        setTimeout(simulateSales, 5000);
    }
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open (future implementation)
                closeMobileMenu();
            }
        });
    });
}

// ============================================
// Mobile Menu (Future Implementation)
// ============================================
function closeMobileMenu() {
    // Placeholder for mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Parallax Effect (Optional Enhancement)
// ============================================
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(el => {
        const speed = 0.1;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16));

// ============================================
// Console Easter Egg
// ============================================
console.log(
    '%c OBSID-Studio %c Local AI Creative Reactor ',
    'background: linear-gradient(135deg, #8B5CF6, #22D3EE); color: #050508; padding: 10px 20px; font-weight: bold; font-size: 16px;',
    'color: #8B5CF6; font-weight: 300;'
);
console.log(
    '%c Devenez Beta Founder : 29€ (79€ au lancement) %c 100 places disponibles ',
    'color: #22D3EE; font-weight: bold;',
    'color: #8B5CF6; font-weight: 300;'
);
console.log('%c https://obsidstudio.lemonsqueezy.com/checkout ', 
    'color: #22D3EE; text-decoration: underline;');
