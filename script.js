// Simple UX: back-to-top button and active section highlighting
(function() {
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        toTop.classList.add('show');
      } else {
        toTop.classList.remove('show');
      }
    });
  }

  const navLinks = document.querySelectorAll('header .nav a[href^="#"]');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const byId = id => document.getElementById(id);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

  sections.forEach(s => io.observe(s));
})();


