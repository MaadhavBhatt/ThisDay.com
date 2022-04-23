// Menu toggle
const nav = document.querySelector('#nav');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Typewriter
const typewriterContainerList = document.querySelectorAll('.typewriter-container');
typewriterContainerList.forEach((container) => {
  const typewriter = container.querySelector('.typewriter');
  container.style.setProperty('--typewriter-chars', typewriter.textContent.length);
});
