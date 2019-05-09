import $ from "jquery";

function handleSmoothScroll(e) {
	e.preventDefault();

	$("html, body").animate(
		{
			scrollTop: $($(this).attr("href")).offset().top
		},
		500,
		"linear"
	);
}

export default handleSmoothScroll;
