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
		
		// About slider
		// let dots = $('.about-slider__dots');
		

		// $('.about-slider').owlCarousel({
			
		// 	}

		var aboutSlider = $('.about-slider');
		aboutSlider.owlCarousel({
			loop:true,
			margin:20,
			responsive: { 
				0: {
					items: 1,
					dots: true
				},
				576: {
					items: 2,
					dots: true
				},
				992: {
					items: 3,
					// autoplay: true,
					autoplayTimeout: 1000,
					smartSpeed: 1000,
					autoplaySpeed: 500,
					dots: true
				},
				1200: {
					items: 4,
					loop: false,
					nav: true
				}
			}
		});
		// Go to the next item
		$('.about-slider__arrow_position_right').click(function() {
				// console.log('Right')
				aboutSlider.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.about-slider__arrow_position_left').click(function() {
				// console.log('Left')					
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				aboutSlider.trigger('prev.owl.carousel');
		})

		})
