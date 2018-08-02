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
document.querySelector('.hamburger2').onclick = function() {
  document.querySelector('.hamburger2').classList.toggle('is-active2');
  document.querySelector('.navbar__menu').classList.toggle('navbar__menu--mobile');
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

/*------SLICK--------*/

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  autoplay: false
});
 $('.slider-for2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  autoplay: false
});

/*-----end SLICK-----*/

/*BEGIN SCROLL to top*/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
		} else {
		$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},500);
	});
});
/*END SCROLL to top*/