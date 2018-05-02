document.querySelector('.menu-button').onclick = function() {
  document.querySelector('.menu-button').classList.toggle('menu-button--active');
  document.querySelector('.mainmenu').classList.toggle('mainmenu--mobile');
}