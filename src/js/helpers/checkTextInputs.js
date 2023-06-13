export const checkTextInputs = (selector) => {
	const textInputs = document.querySelectorAll(selector);
	textInputs.forEach((item) => {
		item.addEventListener("keypress", (e) => {
			const rExp = /[^а-яё 0-9]/gi;
			if (e.key.match(rExp)) {
				e.preventDefault();
			}
		});
	});
};
