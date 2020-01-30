$(document).ready(function () {

	$('.carousel').owlCarousel({
		loop:true,
		margin:0,
		dots: false,
		nav:true,
		navText: [],
		// items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items: 5
        }
    }
})

});