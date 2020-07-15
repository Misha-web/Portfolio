$(document).ready(function() {
	//nav fixed
	const navOffset = $('#nav').offset().top;
	const navHeight = $('#nav').height();
	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();
		if (scrolled > navOffset) {
			$(".nav").addClass('nav-fixed');
			$("#header").css({marginBottom: navHeight});
		} else if (scrolled < navOffset) {
			$(".nav").removeClass('nav-fixed');
			$("#header").css({marginBottom: 0});
		}
	});

	//Burger menu
	$(".nav__burger").on("click", function(event) {
		event.preventDefault();
		$(".nav__menu,.nav__burger").toggleClass('active');
		$("body").toggleClass('lock');
	});

	//Smoove scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$(".nav__menu,.nav__burger").removeClass('active');
		$("body").removeClass('lock');

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
});



