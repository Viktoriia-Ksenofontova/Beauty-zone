const menu = document.querySelector('.main-navigation__menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => {
  menu.classList.toggle('is-open');
  menuBtnOpen.classList.toggle('is-visible');
  menuBtnClose.classList.toggle('is-visible');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.main-navigation__link');
const closeMenu = () => {
  if (menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
  }
  if (menuBtnClose.classList.contains('is-visible')) {
    menuBtnClose.classList.remove('is-visible');
  }
  if (!menuBtnOpen.classList.contains('is-visible')) {
    menuBtnOpen.classList.add('is-visible');
  }
};

menuLinks.forEach(menuLink => menuLink.addEventListener('click', closeMenu));

const socialMediaLinks = document.querySelectorAll('.js-social-media__link');
socialMediaLinks.forEach(link => link.addEventListener('click', closeMenu));
