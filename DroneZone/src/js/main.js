// Mouse down effect
// $(document).ready(function(){
// 	$('.scroll-down').click(function(){
// 		$id = $(this);
// 		$('body,html').animate({
// 			scrollTop: $($id).offset().top -20}, 750);
// 	});
// });


// ver.2
// $(document).ready(function(){
// 	$('.scroll-down__link').click(function(e){
// 		e.preventDefault();
// 		$id = $(this).attr('href');
// 		$('body,html').animate({
// 			scrollTop: $($id).offset().top -20}, 750);
// 	});
// });
$(function() {
  $('a[href="#about"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ 
    	scrollTop: $($(this).attr('href')).offset().top }, 800, 'linear');
  });
});

