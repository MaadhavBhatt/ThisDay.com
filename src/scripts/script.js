// Menu toggle
const nav = document.querySelector('#nav');
const hamburgerContainer = document.querySelector('.hamburger-container');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  nav.toggleAttribute('open');
  hamburgerContainer.toggleAttribute('animate-hamburger');
});

// Typewriter
const typewriterContainerList = document.querySelectorAll('.typewriter-container');
typewriterContainerList.forEach((container) => {
  const typewriter = container.querySelector('.typewriter');
  container.style.setProperty('--typewriter-chars', typewriter.textContent.length);
});
