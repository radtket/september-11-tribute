import $ from "jquery";

const stickyNavInit = () => {
	const stickyNavTop = $(".navbar").offset().top;
	const stickyNav = () => {
		const scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
	};

	$(window).scroll(() => {
		stickyNav();
	});
};

export default stickyNavInit;
