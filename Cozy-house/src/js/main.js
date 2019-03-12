// Mobile-menu
$(document).ready(function(){
	var link = $('.mobile-menu__btn');
	var link_active = $('.mobile-menu__btn--active');
	var menu = $('.header__menu');

	link.click(function() {
		link.toggleClass('mobile-menu__btn--active');
		menu.toggleClass('header__menu--active');
	});
	link_active.click(function(){
		link.removeClass('mobile-menu__btn--active');
	});
});
	

// Mobile menu version 2
// $('.mobile-menu__btn').on('click',function(e) {
//   e.preventDefault;
//   $(this).toggleClass('mobile-menu__btn--active');
// });

