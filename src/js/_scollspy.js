// import Gumshoe from "gumshoejs";

const initScrollSpy = Gumshoe(".nav--primary a", {
	offset() {
		return document.querySelector(".navbar").getBoundingClientRect().height;
	}
});

export default initScrollSpy;
