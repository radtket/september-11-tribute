import $ from "jquery";

const initMobileNav = () => {
	const menuToggle = $("#js-mobile-trigger").unbind();
	menuToggle.on("click", e => {
		menuToggle.toggleClass("hamburger--open");
		e.preventDefault();
		$("#js-navigation-menu").slideToggle(() => {
			if ($("#js-navigation-menu").is(":hidden")) {
				$("#js-navigation-menu").removeAttr("style");
			}
		});
	});
};

export default initMobileNav;
