import { modals, sliders, forms, mask, showMoreStyles } from "./modules/index";
import { checkTextInputs } from "./helpers/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
	"use strict";

	modals();

	sliders(".main-slider-item", 1, "vertical");
	sliders(
		".feedback-slider-item",
		1,
		"horizontal",
		".main-prev-btn",
		".main-next-btn"
	);

	forms();

	mask("[name='phone']");
	checkTextInputs("[name='name']");
	checkTextInputs("[name='message']");

	showMoreStyles(".button.button-transparent.button-styles", ".styles-2");
}
