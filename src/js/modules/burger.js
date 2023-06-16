export const burger = (burgerSelector, menuSelector) => {
	const btnBurger = document.querySelector(burgerSelector);
	const menuBurger = document.querySelector(menuSelector);

	menuBurger.style.display = "none";

	btnBurger.addEventListener("click", () => {
		if (menuBurger.style.display === "none" && window.screen.availWidth < 993) {
			// console.log(window.screen.availWidth);
			menuBurger.style.display = "block";
		} else {
			menuBurger.style.display = "none";
		}
	});

	window.addEventListener("resize", () => {
		if (window.screen.availWidth > 992) {
			menuBurger.style.display = "none";
		}
	});
};
