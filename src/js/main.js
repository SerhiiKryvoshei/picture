import {
	modals,
	sliders,
	forms,
	mask,
	showMoreStyles,
	calc,
	filter,
	pictureSize,
	accordion,
	burger,
	scrolling,
	drop,
} from "./modules/index";
import { checkTextInputs } from "./helpers/index";
import { getResource } from "./services/index";

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

	showMoreStyles(".button.button-transparent.button-styles", "#styles .row");

	let sizePrice;

	//http://localhost:3001/sizePrice
	getResource("server/db.json")
		.then((response) => {
			let { sizePrice, materialPrice, optionsPrice } = response;
			calc(
				"#size",
				"#material",
				"#options",
				".promocode",
				".calc-price",
				sizePrice,
				materialPrice,
				optionsPrice
			);
		})
		.catch((error) => console.log(error));

	filter();

	pictureSize(".sizes-block");

	accordion(".accordion-heading", ".accordion-block");

	burger(".burger", ".burger-menu");

	scrolling(".pageup");

	drop();
}
