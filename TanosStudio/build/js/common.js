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
	$('.our-employees').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 2000,
		speed: 400,
		dots: true,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
