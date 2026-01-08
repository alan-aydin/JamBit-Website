document.addEventListener('DOMContentLoaded', () => {
  const phone = document.getElementById('phone');
  if (!phone) {
    console.error('Phone element not found. Make sure <img id="phone"> exists.');
    return;
  }

  let mouseX = 0, mouseY = 0, rafId = null;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(update);
  });

  function update() {
    rafId = null;
    const rect = phone.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const xPercent = (mouseX - cx) / (window.innerWidth / 2);
    const yPercent = (mouseY - cy) / (window.innerHeight / 2);

    const maxDeg = 25;
    const rotateY = xPercent * maxDeg;  
    const rotateX = -yPercent * maxDeg;

    phone.style.transform = `
  translateX(-50%)
  rotateX(${rotateX}deg)
  rotateY(${rotateY}deg)
`;

  }

  window.addEventListener('mouseleave', () => {
    phone.style.transform = 'translateX(-50%) rotateX(0deg) rotateY(0deg)';

  });
});
