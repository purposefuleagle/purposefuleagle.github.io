$(function() {

	// Mobile hamburger menu
	$(document).ready(function(){
		var link = $('.main-nav__toggle');
		var link_active = $('.menu-button');
		var menu = $('.main-nav');
		var menuText = $('.menu-button__text')

		link.click(function() {
			link.toggleClass('menu-button--active');
			menu.toggleClass('main-nav--active');
			menuText.toggleClass('menu-button__text--active');
		});
	});

	// Slick-slider
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
  	fade: true,
  	cssEase: 'linear'
	});

});
