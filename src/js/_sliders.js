import $ from "jquery";
import "slick-carousel";

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
	customPaging(slider, i) {
		return `<button class="tab">
			${i}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.95 14.95">
				<circle cx="7.48" cy="7.48" r="7.48"/>
			</svg>
		</button>`;
	},
	arrows: false
});

$(".gallery-slider__nav--left").click(() => {
	$(".gallery-slider").slick("slickPrev");
});

$(".gallery-slider__nav--right").click(() => {
	$(".gallery-slider").slick("slickNext");
});
