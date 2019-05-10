/* eslint-disable func-names */
import $ from "jquery";

import handleSmoothScroll from "./_smooth-scroll";
import stickyNavInit from "./_sticky-nav";
import initTimeline from "./_timeline";
import offsetHero from "./_offsetHero";
import initScrollSpy from "./_scollspy";
import "./_sliders";
import "./_vertical-timeline";

$(document).ready(() => {
	initTimeline();
	stickyNavInit();
	offsetHero();
	initScrollSpy();
});

$('a[href*="#"]').on("click", handleSmoothScroll);

$(window).on("resize", offsetHero);

$(".expander-trigger").click(function(e) {
	e.preventDefault(e);
	$(".expander-content").slideToggle();
	if ($(".expander-trigger__text").text() === "View Full List") {
		$(".expander-trigger__text").text("Collapse");
		$(this).removeClass("expander-hidden");
	} else {
		$(".expander-trigger__text").text("View Full List");
		$(this).addClass("expander-hidden");
	}
});
