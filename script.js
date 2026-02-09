/* ============================================
   SUPER QUANT CODERS - MAIN JAVASCRIPT
   FinTech Meets Cyberpunk Aesthetic
   ============================================ */

// ============================================
// TYPING ANIMATION
// ============================================

const typingText = document.getElementById('typing-text');
const fullText = 'Initializing Super_Quant_Coders...';
let currentIndex = 0;

function typeCharacter() {
    if (currentIndex < fullText.length) {
        typingText.textContent += fullText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeCharacter, 50);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    typeCharacter();
});

// ============================================
// EASTER EGG - HACK SEQUENCE
// ============================================

let keySequence = [];
const secretCode = ['h', 'a', 'c', 'k'];
let matrixActive = false;

// Listen for all key presses
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    keySequence.push(key);

    // Keep only the last 4 characters
    if (keySequence.length > 4) {
        keySequence.shift();
    }

    // Check if the sequence matches "HACK"
    if (keySequence.join('') === secretCode.join('')) {
        triggerMatrixMode();
        keySequence = []; // Reset the sequence
    }
});

function triggerMatrixMode() {
    if (matrixActive) return;
    matrixActive = true;

    // Add matrix mode to body
    document.body.classList.add('matrix-mode');

    // Start matrix rain effect
    startMatrixRain();

    // Remove matrix mode after 5 seconds
    setTimeout(() => {
        document.body.classList.remove('matrix-mode');
        stopMatrixRain();
        matrixActive = false;
    }, 5000);
}

// ============================================
// MATRIX RAIN EFFECT
// ============================================

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

// Column configuration
let columns = Math.floor(canvas.width / 20);
let drops = [];

// Initialize drops array
function initializeDrops() {
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }
}

initializeDrops();

// Update canvas size if window resizes during matrix mode
window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / 20);
    initializeDrops();
});

function drawMatrixRain() {
    // Semi-transparent black background for tail effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = '#00ff41';
    ctx.font = 'bold 20px "Courier New"';
    ctx.shadowColor = '#00ff41';
    ctx.shadowBlur = 10;

    for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(char, i * 20, drops[i]);

        // Reset drop position when it falls off screen
        if (drops[i] > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i] += 20;
    }
}

let matrixAnimationId = null;

function startMatrixRain() {
    canvas.classList.add('active');
    initializeDrops();

    function animate() {
        drawMatrixRain();
        matrixAnimationId = requestAnimationFrame(animate);
    }

    animate();
}

function stopMatrixRain() {
    canvas.classList.remove('active');
    if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

// Active navigation link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00ff41';
            link.style.textShadow = '0 0 10px #00ff41';
        } else {
            link.style.color = '';
            link.style.textShadow = '';
        }
    });
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}

const contactButtons = document.querySelectorAll('.contact-button');
contactButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href') === '#') {
            e.preventDefault();
            showNotification('Feature coming soon! Stay tuned.');
        }
    });
});

// ============================================
// NOTIFICATION SYSTEM (for demo purposes)
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 255, 65, 0.2);
        border: 2px solid #00ff41;
        color: #00ff41;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
        z-index: 3000;
        max-width: 300px;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// ROBOT DOG HOVER EFFECT
// ============================================

const robotDogCard = document.querySelector('.robot-dog-image-wrapper');
if (robotDogCard) {
    robotDogCard.addEventListener('mouseenter', () => {
        showNotification('> Scanning robot_dog_v1.0...');
    });

    robotDogCard.addEventListener('mouseleave', () => {
        // Optional: Add another notification or effect
    });
}

// ============================================
// PARALLAX SCROLL EFFECT (Optional Enhancement)
// ============================================

const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    });
}

// ============================================
// DYNAMIC EFFECTS ON INTERSECTION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// ============================================
// ACCESSIBILITY & PERFORMANCE
// ============================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// ============================================
// EASTER EGG HINTS (Optional)
// ============================================

// Uncomment to show hints about the easter egg
/*
console.log('%c🔓 Try typing "HACK" for a surprise!', 
    'color: #00ff41; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff41; font-family: "Fira Code", monospace');
*/

// ============================================
// ADVANCED INTERACTIONS
// ============================================

// Add glow effect to buttons on hover
const buttons = document.querySelectorAll('.cta-button, .contact-button');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.8), 0 0 60px rgba(0, 128, 255, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
    });
});

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl+Alt+D: Developer Easter Egg
    if (e.ctrlKey && e.altKey && e.code === 'KeyD') {
        console.log('%c👨‍💻 Welcome, Developer!', 'color: #00ff41; font-size: 14px; font-weight: bold; font-family: "Fira Code", monospace');
        showNotification('> dev_mode_activated');
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
    });
}

// ============================================
// INITIALIZATION
// ============================================

// Add animation class to elements on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.about-card, .member-card').forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'slideInUp 0.6s ease forwards';
        }, index * 100);
    });
});

// Log welcome message
console.log('%cWelcome to Super Quant Coders', 'color: #00ff41; font-size: 20px; font-weight: bold; font-family: "Fira Code", monospace');
console.log('%cTip: Type "HACK" to trigger the Matrix mode! 🌧️', 'color: #0080ff; font-size: 12px; font-family: "Fira Code", monospace');
