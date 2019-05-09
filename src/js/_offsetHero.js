import $ from "jquery";

const offsetHero = () => {
	const heroWrapper = $(".hero");
	const heroImage = $(".hero__img");
	const heroImageHeight = heroImage.innerHeight();

	if ($(window).width() > 1150) {
		heroImage.css("top", `${heroImageHeight * -0.25}px`);
		heroWrapper.css("margin-bottom", `${heroImageHeight * -0.25}px`);
	} else {
		heroImage.css("top", `${heroImageHeight * -0.15}px`);
		heroWrapper.css("margin-bottom", `${heroImageHeight * -0.15}px`);
	}
};

export default offsetHero;
