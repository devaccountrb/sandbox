document.querySelector('.menu-button').onclick = function() {
  document.querySelector('.menu-button').classList.toggle('menu-button--active');
  document.querySelector('.mainmenu').classList.toggle('mainmenu--mobile');
}


var btn = document.querySelector('.subscribe_form__button')
btn.onmousemove = function (e) {
  var x = e.pageX - btn.offsetLeft
  var y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}