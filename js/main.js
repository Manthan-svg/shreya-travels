/* ============================================================
   SHREYA TRAVELS — Main JavaScript
   Nav toggle, animations, forms, FAQ accordion
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. HEADER SCROLL EFFECT
  // ==========================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load

  // ==========================================
  // 2. PREMIUM MOBILE DRAWER
  // ==========================================
  (function initPremiumDrawer() {
    const hamburger = document.getElementById('hamburger');
    if (!hamburger) return;

    // Active page detection
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const isActive = (page) => currentPage === page ? ' active' : '';

    // Build drawer HTML
    const drawerHTML = `
      <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
      <aside class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Navigation Menu" aria-hidden="true">

        <!-- HEADER -->
        <div class="mobile-drawer-header">
          <a href="index.html" class="drawer-logo" id="drawerLogoLink">
            <div class="drawer-logo-icon">&#9992;&#65039;</div>
            <div class="drawer-logo-text">
              <span class="drawer-logo-name">Shreya Travels</span>
              <span class="drawer-logo-est">&#10022; Est. 1995 &#10022;</span>
            </div>
          </a>
          <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- SCROLLABLE AREA -->
        <div class="mobile-drawer-scroll">

          <!-- WELCOME CARD -->
          <div class="drawer-welcome">
            <div class="drawer-welcome-text">
              <div class="welcome-tag">&#10022; Welcome aboard</div>
              <p>Discover handcrafted journeys designed just for you.</p>
            </div>
            <span class="drawer-welcome-icon">&#127757;</span>
          </div>

          <!-- NAVIGATION -->
          <nav class="drawer-nav" aria-label="Mobile navigation">
            <div class="drawer-nav-label">Navigate</div>
            <ul class="drawer-nav-list">

              <li class="drawer-nav-item">
                <a href="index.html" class="drawer-nav-link${isActive('index.html')}">
                  <span class="drawer-nav-icon">&#127968;</span>
                  <span class="drawer-nav-text">Home</span>
                  <svg class="drawer-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>

              <li class="drawer-nav-item">
                <a href="about.html" class="drawer-nav-link${isActive('about.html')}">
                  <span class="drawer-nav-icon">&#128100;</span>
                  <span class="drawer-nav-text">About Us</span>
                  <svg class="drawer-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>

              <!-- Services Accordion -->
              <li class="drawer-nav-item">
                <div class="drawer-services-item" id="drawerServicesAccordion">
                  <button class="drawer-services-toggle" id="drawerServicesToggle" aria-expanded="false">
                    <span class="drawer-nav-icon">&#128506;</span>
                    <span class="drawer-nav-text">Services</span>
                    <svg class="drawer-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div class="drawer-services-panel" id="drawerServicesPanel">
                    <div class="drawer-service-cards">
                      <a href="holiday-packages.html" class="drawer-service-card${isActive('holiday-packages.html')}">
                        <span class="drawer-svc-icon">&#127958;</span>
                        <span class="drawer-svc-name">Holiday Packages</span>
                        <svg class="drawer-svc-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </a>
                      <a href="flight-booking.html" class="drawer-service-card${isActive('flight-booking.html')}">
                        <span class="drawer-svc-icon">&#9992;&#65039;</span>
                        <span class="drawer-svc-name">Flight Booking</span>
                        <svg class="drawer-svc-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </a>
                      <a href="visa-passport.html" class="drawer-service-card${isActive('visa-passport.html')}">
                        <span class="drawer-svc-icon">&#128203;</span>
                        <span class="drawer-svc-name">Visa &amp; Passport</span>
                        <svg class="drawer-svc-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </a>
                      <a href="car-rental.html" class="drawer-service-card${isActive('car-rental.html')}">
                        <span class="drawer-svc-icon">&#128663;</span>
                        <span class="drawer-svc-name">Car Rental</span>
                        <svg class="drawer-svc-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="drawer-nav-item">
                <a href="contact.html" class="drawer-nav-link${isActive('contact.html')}">
                  <span class="drawer-nav-icon">&#128222;</span>
                  <span class="drawer-nav-text">Contact</span>
                  <svg class="drawer-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>

            </ul>
          </nav>
        </div><!-- end .mobile-drawer-scroll -->




      </aside>
    `;

    // Inject into body
    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    const overlay  = document.getElementById('mobileNavOverlay');
    const drawer   = document.getElementById('mobileDrawer');
    const closeBtn = document.getElementById('drawerCloseBtn');

    const openDrawer = () => {
      overlay.classList.add('active');
      drawer.classList.add('open');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
      drawer.setAttribute('aria-hidden', 'false');
      // Focus close button for accessibility
      setTimeout(() => { if (closeBtn) closeBtn.focus(); }, 380);
    };

    const closeDrawer = () => {
      overlay.classList.remove('active');
      drawer.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
      drawer.setAttribute('aria-hidden', 'true');
    };

    // Logo link in drawer
    const drawerLogoLink = document.getElementById('drawerLogoLink');
    if (drawerLogoLink) drawerLogoLink.addEventListener('click', closeDrawer);

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    // Overlay click
    overlay.addEventListener('click', closeDrawer);

    // Close button
    closeBtn.addEventListener('click', closeDrawer);

    // Close on nav link / service card click
    drawer.querySelectorAll('.drawer-nav-link, .drawer-service-card').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(closeDrawer, 100);
      });
    });

    // Services accordion
    const servicesAccordion = document.getElementById('drawerServicesAccordion');
    const servicesToggle    = document.getElementById('drawerServicesToggle');
    if (servicesToggle && servicesAccordion) {
      servicesToggle.addEventListener('click', () => {
        const isOpen = servicesAccordion.classList.toggle('open');
        servicesToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // ESC key closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
        hamburger.focus();
      }
    });

  })();

  // ==========================================
  // 3. DESKTOP DROPDOWN TOGGLE
  // ==========================================
  const dropdownToggles = document.querySelectorAll('.nav-dropdown > .nav-link');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        e.stopPropagation();
        const parent = toggle.parentElement;
        parent.classList.toggle('dropdown-open');
      }
    });
  });

  // ==========================================
  // 4. ACTIVE PAGE HIGHLIGHTING (Desktop nav)
  // ==========================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      const dropdownParent = link.closest('.nav-dropdown');
      if (dropdownParent) {
        dropdownParent.querySelector('.nav-link').classList.add('active');
      }
    }
  });

  // ==========================================
  // 5. SCROLL-TRIGGERED ANIMATIONS
  // ==========================================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach(el => observer.observe(el));
  }

  // ==========================================
  // 6. SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // 7. FAQ ACCORDION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked (if wasn't active)
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================
  // 8. FORM VALIDATION
  // ==========================================
  const forms = document.querySelectorAll('.enquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        // Remove previous error
        field.classList.remove('error');

        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            isValid = false;
            field.classList.add('error');
          }
        }

        // Phone validation
        if (field.type === 'tel' && field.value.trim()) {
          const phoneRegex = /^[\+]?[\d\s\-]{10,15}$/;
          if (!phoneRegex.test(field.value.trim())) {
            isValid = false;
            field.classList.add('error');
          }
        }
      });

      if (isValid) {
        // Show success message
        const btn = form.querySelector('.form-submit .btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Sent Successfully!';
        btn.style.background = '#22C55E';
        btn.style.boxShadow = '0 4px 20px rgba(34,197,94,0.3)';
        btn.disabled = true;

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.boxShadow = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });

    // Clear error on input
    form.querySelectorAll('.form-control').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
      });
    });
  });

  // Error styling for form fields
  const style = document.createElement('style');
  style.textContent = `
    .form-control.error {
      border-color: var(--terracotta) !important;
      box-shadow: 0 0 0 3px rgba(224,122,95,0.12) !important;
    }
  `;
  document.head.appendChild(style);

  // ==========================================
  // 9. COUNTER ANIMATION (Trust Bar)
  // ==========================================
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            const suffix = entry.target.getAttribute('data-suffix') || '';
            const prefix = entry.target.getAttribute('data-prefix') || '';
            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                entry.target.textContent = prefix + Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
              } else {
                entry.target.textContent = prefix + target + suffix;
              }
            };

            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // ==========================================
  // 10. CONTACT PAGE — Hero Parallax
  // ==========================================
  const contactHero = document.querySelector('.contact-hero');
  const contactHeroBg = document.querySelector('.contact-hero-bg');

  if (contactHero && contactHeroBg) {
    const handleContactParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = contactHero.offsetHeight;
      if (scrollY <= heroHeight) {
        contactHeroBg.style.backgroundPosition = `center calc(50% + ${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleContactParallax, { passive: true });
    handleContactParallax();
  }

});
