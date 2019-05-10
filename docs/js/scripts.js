/*!
 * DO NOT OVERRIDE THIS FILE.
 * Generated with `npm run build`
 *
 * undefined - undefined
 * @version 1.0.0
 * @author undefined
 * @link undefined
 */
 
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global.Scripts = global.Scripts || {}),global.jQuery));
}(this, (function (exports,$) { 'use strict';

$ = 'default' in $ ? $['default'] : $;

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

var stickyNavInit = function () {
	var stickyNavTop = $(".navbar").offset().top;
	var stickyNav = function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
	};

	$(window).scroll(function () {
		stickyNav();
	});
};

function initTimeline() {
	var $timelineBlock = $(".cd-timeline-block");

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
	$(window).on("scroll", function () {
		$timelineBlock.each(animateTimelineItem);
	});
}

var offsetHero = function () {
	var heroWrapper = $(".hero");
	var heroImage = $(".hero__img");
	var heroImageHeight = heroImage.innerHeight();

	if ($(window).width() > 1150) {
		heroImage.css("top", ((heroImageHeight * -0.25) + "px"));
		heroWrapper.css("margin-bottom", ((heroImageHeight * -0.25) + "px"));
	} else {
		heroImage.css("top", ((heroImageHeight * -0.15) + "px"));
		heroWrapper.css("margin-bottom", ((heroImageHeight * -0.15) + "px"));
	}
};

// import Gumshoe from "gumshoejs";

var initScrollSpy = Gumshoe(".nav--primary a", {
	offset: function offset() {
		return document.querySelector(".navbar").getBoundingClientRect().height;
	}
});

$(".names-slider").slick({
	adaptiveHeight: true,
	arrows: false,
	autoplay: true,
	centerMode: true,
	centerPadding: "10px",
	cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
	dots: false,
	draggable: false,
	focusOnSelect: true,
	infinite: true,
	pauseOnHover: false,
	slidesToScroll: 1,
	slidesToShow: 4,
	speed: 600,
	swipe: false,
	touchMove: false,
	useTransform: true,
	vertical: true
});

$(".gallery-slider").slick({
	infinite: true,
	dots: true,
	customPaging: function customPaging(slider, i) {
		return ("<button class=\"tab\">\n\t\t\t" + i + "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14.95 14.95\">\n\t\t\t\t<circle cx=\"7.48\" cy=\"7.48\" r=\"7.48\"/>\n\t\t\t</svg>\n\t\t</button>");
	},
	arrows: false
});

$(".gallery-slider__nav--left").click(function () {
	$(".gallery-slider").slick("slickPrev");
});

$(".gallery-slider__nav--right").click(function () {
	$(".gallery-slider").slick("slickNext");
});

$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

$(".js-vertical-tab").click(function(e) {
	e.preventDefault();

	$(".js-vertical-tab-content").hide();
	var activeTab = $(this).attr("rel");
	$(("#" + activeTab)).show();

	$(".js-vertical-tab").removeClass("is-active");
	$(this).addClass("is-active");

	$(".js-vertical-tab-accordion-heading").removeClass("is-active");
	$((".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']")).addClass(
		"is-active"
	);
});

/* eslint-disable func-names */
$(document).ready(function () {
	initTimeline();
	stickyNavInit();
	offsetHero();
	// new WOW().init();
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

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scripts.js.map