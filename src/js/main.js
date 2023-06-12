import { modals, sliders } from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
	"use strict";

	let modalState = {};

	modals();

	sliders(".main-slider-item", 1, "vertical");
	sliders(
		".feedback-slider-item",
		1,
		"horizontal",
		".main-prev-btn",
		".main-next-btn"
	);
}
