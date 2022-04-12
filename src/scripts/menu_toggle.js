const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menuToggle');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('display-none');
});
