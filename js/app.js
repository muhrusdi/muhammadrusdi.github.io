// Show an off-canvas matching the passed CSS selector


$(document).ready(function() {
	$(".relatedlink").click(function() {
		window.location = $(this).find("a").attr("href");
		return false;
	});
});