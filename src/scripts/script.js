// Menu toggle
const nav = document.querySelector('#nav');
const hamburgerContainer = document.querySelector('.hamburger');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  nav.toggleAttribute('open');
  hamburgerContainer.toggleAttribute('animate-hamburger');
});

// Typewriter
const typewriterContainerList = document.querySelectorAll('.typewriter-container');
const typewriterFade = document.querySelector('.typewriter-fade');
let typewriterChars = [];

typewriterContainerList.forEach((container) => {
  const typewriter = container.querySelector('.typewriter');
  typewriterChars.push(typewriter.textContent.length);
  container.style.setProperty('--typewriter-chars', typewriter.textContent.length);
});

typewriterContainerList.forEach((container) => {
  typewriterFade.style.setProperty('--typewriter-chars', Math.max(...typewriterChars));
});
