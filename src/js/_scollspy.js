import $ from "jquery";

const initScrollSpy = () => {
	// Cache selectors
	let lastId;
	const topMenu = $(".nav--primary");
	const topMenuHeight = topMenu.outerHeight() + 15;
	// All list items
	const menuItems = topMenu.find("a");
	// Anchors corresponding to menu items
	const scrollItems = menuItems.map(function() {
		const item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		const href = $(this).attr("href");
		const offsetTop =
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
		const fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		let cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		const id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent()
				.removeClass("active")
				.end()
				.filter(`[href='#${id}']`)
				.parent()
				.addClass("active");
		}
	});
};

export default initScrollSpy;
