$(".slider").slick({dots:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:920,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:620,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]}),$(document).ready(function(){var e=$(".mobile-menu__btn"),s=$(".mobile-menu__btn--active"),o=$(".header__menu");e.click(function(){e.toggleClass("mobile-menu__btn--active"),o.toggleClass("header__menu--active")}),s.click(function(){e.removeClass("mobile-menu__btn--active")})});