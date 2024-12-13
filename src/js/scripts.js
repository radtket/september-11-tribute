/* eslint-disable func-names */
import $ from "jquery";
import imagesLoaded from "imagesloaded";
import "slick-carousel";
import WOW from 'wow.js'
import handleSmoothScroll from "./_smooth-scroll";
import stickyNavInit from "./_sticky-nav";
import initTimeline from "./_timeline";
import offsetHero from "./_offsetHero";
import initScrollSpy from "./_scollspy";
import initMobileNav from "./_mobileMenu";
import initInMemoriumTabs from "./_inMemoriumTabs";
import initNamesListExpander from "./_names-list-expander";
import "./_sliders";
import "./_vertical-timeline";

imagesLoaded.makeJQueryPlugin($);

$(window).on("load", () => {
	new WOW().init();
	$("body").imagesLoaded(() => {
		$(".page-loader div").fadeOut();
		$(".page-loader")
			.delay(200)
			.fadeOut("slow");
	});
});

$(document).ready(() => {
	initTimeline();
	stickyNavInit();
	offsetHero();
	initScrollSpy();
	initMobileNav();
	initInMemoriumTabs();
	initNamesListExpander();
});

$('a.nav__item[href*="#"]').on("click", handleSmoothScroll);

$(window).on("resize", offsetHero);
