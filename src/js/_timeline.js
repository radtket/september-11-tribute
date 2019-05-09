import $ from "jquery";

function initTimeline() {
	const $timelineBlock = $(".cd-timeline-block");

	function hideTimelineOutsideOfViewport() {
		if (
			$(this).offset().top >
			$(window).scrollTop() + $(window).height() * 0.75
		) {
			$(this)
				.find(".cd-timeline-img, .cd-timeline-content")
				.addClass("is-hidden");
		}
	}

	function animateTimelineItem() {
		if (
			$(this).offset().top <=
				$(window).scrollTop() + $(window).height() * 0.75 &&
			$(this)
				.find(".cd-timeline-img")
				.hasClass("is-hidden")
		) {
			$(this)
				.find(".cd-timeline-img, .cd-timeline-content")
				.removeClass("is-hidden")
				.addClass("bounce-in");
		}
	}

	// hide timeline blocks which are outside the viewport
	$timelineBlock.each(hideTimelineOutsideOfViewport);

	// on scolling, show/animate timeline blocks when enter the viewport
	$(window).on("scroll", () => {
		$timelineBlock.each(animateTimelineItem);
	});
}

export default initTimeline;
