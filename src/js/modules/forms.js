import { postData } from "../services/index";

const urls = {
	designer: "https://jsonplaceholder.typicode.com/posts",
	quester: "https://dummyjson.com/products/add",
};

const message = {
	loading: "Загрузка...",
	success: "Спасибо! Скоро мы с вами свяжемся.",
	failure: "Что-то пошло не так.",
	spinner: "spinner.gif",
	ok: "ok.png",
	fail: "fail.png",
};

const clearInputs = (inputs, uploads) => {
	inputs.forEach((item) => {
		item.value = "";
	});
	uploads.forEach((item) => {
		item.previousElementSibling.textContent = "Файл не выбран";
	});
};

export const forms = () => {
	const forms = document.querySelectorAll("form");
	const inputs = document.querySelectorAll("input");
	const uploads = document.querySelectorAll("[name='upload']");

	let fileFullName;

	uploads.forEach((item) => {
		item.addEventListener("input", () => {
			fileFullName = item.files[0].name;
			let dots;
			let fileName = item.files[0].name.split(".")[0];
			let fileExtension = item.files[0].name.split(".")[1];
			fileName.length > 7 ? (dots = "...") : (dots = ".");
			const name = fileName.substring(0, 7) + dots + fileExtension;
			item.previousElementSibling.textContent = name;
		});
	});

	forms.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			const target = e.target;

			let sum = 0;
			if (target.classList.contains("form_calc")) {
				const calcPrice = target.querySelector(".calc-price");
				sum = calcPrice.textContent;
			}

			let api;
			const statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			item.parentNode.appendChild(statusMessage);
			// приховуємо поточну форму;
			item.classList.add("animated", "fadeOutUp");
			setTimeout(() => {
				item.style.display = "none";
			}, 400);

			const statusImg = document.createElement("img");
			statusImg.setAttribute("src", message.spinner);
			statusImg.classList.add("animated", "fadeInUp");
			statusMessage.appendChild(statusImg);

			const textMessage = document.createElement("div");
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			const formData = new FormData(item);

			item.closest(".popup-design") || item.classList.contains("form_calc")
				? (api = urls.designer)
				: (api = urls.quester);

			formData.append("api", api);
			formData.append("fileFullName", fileFullName);
			if (sum > 0) formData.append("sum", sum);

			const strJSON = JSON.stringify(Object.fromEntries(formData));

			postData(api, strJSON)
				.then((response) => {
					statusImg.setAttribute("src", message.ok);
					statusImg.setAttribute("alt", "test image");
					textMessage.textContent = message.success;
					// console.log(response);
				})
				.catch(() => {
					statusImg.setAttribute("src", message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs(inputs, uploads);
					setTimeout(() => {
						statusMessage.remove();
						item.style.display = "block";
						item.classList.remove("fadeOutUp");
						item.classList.add("fadeInUp");
					}, 5000);
				});
		});
	});
};
