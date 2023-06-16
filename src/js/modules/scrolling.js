export const scrolling = (upSelector) => {
	const btnUp = document.querySelector(upSelector);
	btnUp.classList.add("animated");

	window.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop > 1650) {
			// btnUp.style.opacity = "1";
			btnUp.classList.add("fadeIn");
			btnUp.classList.remove("fadeOut");
		} else {
			// btnUp.style.opacity = "0";
			btnUp.classList.add("fadeOut");
			btnUp.classList.remove("fadeIn");
		}
	});
};
