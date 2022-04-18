// Menu toggle
const nav = document.querySelector('#nav');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  nav.classList.toggle('display-none');
});

// Typewriter
const typewriter = document.querySelector('.typewriter');
typewriter.style.setProperty('--typewriter-chars', typewriter.textContent.length);
