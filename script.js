/* ============================================================
   AI Travel Planner — Main Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Navigation --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- Navbar Scroll Effect --- */
  const navbar = document.getElementById('navbar');
  const scrollIndicator = document.getElementById('scrollIndicator');

  function handleNavScroll() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    if (scrollIndicator) {
      scrollIndicator.style.opacity = scrolled ? '0' : '1';
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* --- Scroll-triggered Animations (Intersection Observer) --- */
  const animatedEls = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    animatedEls.forEach(el => observer.observe(el));
  } else {
    animatedEls.forEach(el => el.classList.add('visible'));
  }

  /* --- Counter Animation --- */
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
      if (counter.dataset.animated) return;
      const target = parseInt(counter.dataset.count, 10);
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);

        if (target >= 1000) {
          counter.textContent = (value / 1000).toFixed(value >= target ? 0 : 1) + 'K+';
        } else {
          counter.textContent = value + (target < 100 ? '' : '+');
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (target >= 1000) {
            counter.textContent = Math.round(target / 1000) + 'K+';
          } else {
            counter.textContent = target + (target === 99 ? '%' : '+');
          }
        }
      }

      counter.dataset.animated = 'true';
      requestAnimationFrame(update);
    });
  }

  /* Trigger counters when hero-stats is visible */
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statsObserver.observe(statsEl);
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
