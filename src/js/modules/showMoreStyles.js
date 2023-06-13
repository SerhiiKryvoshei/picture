export const showMoreStyles = (triggerSelector, stylesSelector) => {
	const btn = document.querySelector(triggerSelector);
	const cards = document.querySelectorAll(stylesSelector);

	cards.forEach((item) => {
		item.classList.add("animated", "fadeInUp");
	});

	btn.addEventListener("click", () => {
		cards.forEach((item) => {
			// item.classList.toggle("hidden-lg");
			item.classList.remove(
				"hidden-lg",
				"hidden-md",
				"hidden-sm",
				"hidden-xs",
				"styles-2"
			);
			item.classList.add(
				"col-sm-3",
				"col-sm-offset-0",
				"col-xs-10",
				"col-xs-offset-1"
			);
		});
		// btn.style.display = "none";
		btn.remove();
	});
};
