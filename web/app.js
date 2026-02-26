const revealEls = document.querySelectorAll('.card, .section, .hero-inner, .hero-panel');
revealEls.forEach((el) => el.classList.add('reveal'));

const reveal = () => {
  const trigger = window.innerHeight * 0.9;
  revealEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
reveal();
