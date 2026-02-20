// Smooth scroll for in-page links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href') || '';
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Very light parallax on hero visual cards
const heroVisual = document.querySelector('[data-parallax]');

if (heroVisual) {
  const cards = heroVisual.querySelectorAll('.hero-card');

  const handleMove = (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    cards.forEach((card, index) => {
      const intensity = (index + 1) * 4; // small, but staggered
      const x = -relX * intensity;
      const y = -relY * intensity;
      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const reset = () => {
    cards.forEach((card) => {
      card.style.transform = 'translate(0, 0)';
    });
  };

  heroVisual.addEventListener('mousemove', handleMove);
  heroVisual.addEventListener('mouseleave', reset);
}
