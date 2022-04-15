const nav = document.querySelector('#nav');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open', 'display-none');
});
