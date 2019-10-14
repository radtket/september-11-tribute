/* eslint-disable func-names */
import $ from "jquery";

const initNamesListExpander = () => {
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
};

export default initNamesListExpander;
