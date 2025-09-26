
const reveals = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('mousemove', e => {
  const bg = document.getElementById('bg-gradient');
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  bg.style.background = `
    radial-gradient(circle at ${x}% ${y}%, #7b61ff40, transparent 60%),
    radial-gradient(circle at ${100 - x}% ${100 - y}%, #007aff40, transparent 60%)
  `;
});
