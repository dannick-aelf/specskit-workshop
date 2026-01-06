// SpecKit Presentation - Interactive Features
// Handles smooth scrolling, navigation highlighting, accordion, and mobile menu

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || !href) return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80; // Approximate nav height
      const targetPosition = (target as HTMLElement).offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active nav link
      updateActiveNavLink(href);
      
      // Close mobile menu if open
      closeMobileMenu();
    }
  });
});

// Update active navigation link based on scroll position
function updateActiveNavLink(hash?: string) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
  
  if (hash) {
    const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// Intersection Observer for scroll-based nav highlighting
const observerOptions = {
  root: null,
  rootMargin: '-100px 0px -66%',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      if (id) {
        updateActiveNavLink(`#${id}`);
      }
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section[id]').forEach((section) => {
  observer.observe(section);
});

// Accordion functionality for "For Engineers" section
const engineerToggle = document.getElementById('engineer-toggle');
const engineerDetails = document.getElementById('engineer-details');
const engineerArrow = document.getElementById('engineer-arrow');

if (engineerToggle && engineerDetails && engineerArrow) {
  engineerToggle.addEventListener('click', () => {
    const isOpen = engineerDetails.classList.contains('open');
    
    if (isOpen) {
      engineerDetails.classList.remove('open');
      engineerToggle.setAttribute('aria-expanded', 'false');
      engineerArrow.style.transform = 'rotate(0deg)';
    } else {
      engineerDetails.classList.add('open');
      engineerToggle.setAttribute('aria-expanded', 'true');
      engineerArrow.style.transform = 'rotate(180deg)';
    }
  });
}

// Mobile menu toggle (if needed in future)
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
function closeMobileMenu() {
  // Mobile menu functionality can be added here if needed
  // For now, navigation links work on mobile via smooth scroll
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Escape key closes accordion
  if (e.key === 'Escape' && engineerDetails?.classList.contains('open')) {
    engineerDetails.classList.remove('open');
    engineerToggle?.setAttribute('aria-expanded', 'false');
    if (engineerArrow) {
      engineerArrow.style.transform = 'rotate(0deg)';
    }
    engineerToggle?.focus();
  }
});

// Set initial active nav link based on hash
if (window.location.hash) {
  updateActiveNavLink(window.location.hash);
} else {
  updateActiveNavLink('#hero');
}

console.log('SpecKit Presentation loaded');






