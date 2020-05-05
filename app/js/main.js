$(document).ready(function() {
	//Burger menu
	$(".header__burger").on("click", function(event) {
		event.preventDefault();
		$(".nav,.header__burger").toggleClass('active');
	});

	//Smoove scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
});



