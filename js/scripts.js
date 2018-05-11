var btn = document.querySelector('.subscribe_form__button')
btn.onmousemove = function (e) {
  var x = e.pageX - btn.offsetLeft
  var y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

document.querySelector('.hamburger').onclick = function() {
  document.querySelector('.hamburger').classList.toggle('is-active');
  document.querySelector('.mainmenu').classList.toggle('mainmenu--mobile');
}

/*BEGIN выпадающие меню верхнего блока*/
$('.select__list').click(function(){
$(this).toggleClass('open');
})

$('.select__item').click(function(){
var setLang = $('.select__list').data('location'),
    dataLangSelect = $(this).data('lang')
      $('.select__list').data('location', dataLangSelect);
      $('.select__item').removeClass('active');
      $(this).toggleClass('active');
})
/*END выпадающие меню верхнего блока*/