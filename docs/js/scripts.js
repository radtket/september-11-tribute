/*!
 * DO NOT OVERRIDE THIS FILE.
 * Generated with `npm run build`
 *
 * ice-september-eleven - Booz Allen Hamilton
 * @version 1.0.0
 * @author Taylor Radtke
 * @contact radtke_taylor@bah.com
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

var initScrollSpy = function () {
	// Cache selectors
	var lastId;
	var topMenu = $(".nav--primary");
	var topMenuHeight = topMenu.outerHeight() + 15;
	// All list items
	var menuItems = topMenu.find("a");
	// Anchors corresponding to menu items
	var scrollItems = menuItems.map(function() {
		var item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		var href = $(this).attr("href");
		var offsetTop =
			href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: offsetTop
				},
				300
			);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function() {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) { return this; }
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent()
				.removeClass("active")
				.end()
				.filter(("[href='#" + id + "']"))
				.parent()
				.addClass("active");
		}
	});
};

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
	initScrollSpy();
});

$('a[href*="#"]').on("click", handleSmoothScroll);

$(window).on("resize", offsetHero);

$(".expander__trigger").click(function(e) {
	e.preventDefault(e);
	$(".expander__content").slideToggle();
	if ($(".expander__trigger__text").text() === "View Full List") {
		$(".expander__trigger__text").text("Collapse");
		$(this).removeClass("expander__hidden");
	} else {
		$(".expander__trigger__text").text("View Full List");
		$(this).addClass("expander__hidden");
	}
});

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scripts.js.map
