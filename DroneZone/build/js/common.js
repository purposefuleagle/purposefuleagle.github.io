$(function(){$('a[href="#about"]').on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},800,"linear")})});