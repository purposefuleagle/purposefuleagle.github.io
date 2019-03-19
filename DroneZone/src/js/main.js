/* Smooth scroll ====================================*/

/* Smooth scroll version 1*/

// $(document).ready(function(){
// 	$('.scroll-down').click(function(){
// 		$id = $(this);
// 		$('body,html').animate({
// 			scrollTop: $($id).offset().top -20}, 750);
// 	});
// });


/* Smooth scroll version 2*/
// $(function() {
//   $('a[href="#about"], ').on('click', function(e) {
//     e.preventDefault();

//     $('html, body').animate({ 
//     	scrollTop: $($(this).attr('href')).offset().top }, 800, 'linear');
//   });
// });

/* Smooth scroll version 3*/
$(function(){
	$('#js-scroll-about').on("click", function(e){
			e.preventDefault();
			var aboutOffset = $('#js-about').offset().top;
			$("html, body").animate({
				scrollTop: aboutOffset
			}, 800);
	});

		/* Fixed header when scroll
    ====================================*/

   var headerHeight = $("#js-header").height();
   	$(document).on("scroll", function(){

   			var documentScroll = $(this).scrollTop();
   			

   			if (documentScroll > headerHeight){
   					$("#js-nav-wrap").addClass("nav-fixed");
   			}
   			else {
   				$("#js-nav-wrap").removeClass("nav-fixed");
   			}

   	});


/* Smooth scroll to the pages block
    ====================================*/

  $(".menu__link").on("click", function(e){

  	e.preventDefault();
  	var currentBlock = $(this).attr("href"),
  			currentBlockOffset = $(currentBlock).offset().top;

  	$("html, body").animate({
            scrollTop: currentBlockOffset - 40
        }, 800);
  });


// Mobile menu version 2
$('.mobile-menu__btn').on('click',function(e) {
  e.preventDefault();
  $(this).toggleClass('mobile-menu__btn--active');
  $('.menu').slideToggle();
});


});




 

