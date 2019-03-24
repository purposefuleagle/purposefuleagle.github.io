$(function() {

	$(document).ready(function(){
		var link = $('.main-nav__toggle');
		var link_active = $('.menu-button');
		var menu = $('.main-nav');
	
		link.click(function() {
			link.toggleClass('menu-button--active');
			menu.toggleClass('main-nav--active');
		});
		link_active.click(function(){
			link.removeClass('mobile-menu__btn--active');
		});
	});
});
