$(document).ready(function() {
	$(".header__burger").on("click", function(event) {
		event.preventDefault();
		$(".nav,.header__burger").toggleClass('active');
	})
});



