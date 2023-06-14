import { getResource } from "../services/index";

export const showMoreStyles = (triggerSelector, wrapperSelector) => {
	const btn = document.querySelector(triggerSelector);

	const createCards = (response) => {
		response.forEach(({ src, title, link }) => {
			const card = document.createElement("div");
			card.classList.add(
				"animated",
				"fadeInUp",
				"col-sm-3",
				"col-sm-offset-0",
				"col-xs-10",
				"col-xs-offset-1"
			);

			card.innerHTML = `
				<div class="styles-block">
					<img src=${src} alt="style ${title}">
					<h4>${title}</h4>
					<a href="${link}">Подробнее</a>
				</div>
			`;

			document.querySelector(wrapperSelector).appendChild(card);
		});
	};

	btn.addEventListener("click", function () {
		// getResource("http://localhost:3001/styles")
		// 	.then((response) => {
		// 		// console.log(response);
		// 		createCards(response);
		// 	})
		// 	.catch((error) => console.log(error));

		getResource("server/db.json")
			.then((response) => {
				console.log(response.styles);
				createCards(response.styles);
			})
			.catch((error) => console.log(error));

		this.remove();
	});
};
