export const calc = (
	sizeSelector,
	materialSelector,
	optionsSelector,
	promoCodeSelector,
	resultSelector,
	sizePrice,
	materialPrice,
	optionsPrice
) => {
	const sizeBlock = document.querySelector(sizeSelector);
	const materialBlock = document.querySelector(materialSelector);
	const optionsBlock = document.querySelector(optionsSelector);
	const promoCodeBlock = document.querySelector(promoCodeSelector);
	const resultBlock = document.querySelector(resultSelector);

	let sumSize;
	let coefficient;
	let sumOption;
	let sum;
	let foundElement;

	const handlerCalc = (e) => {
		foundElement = sizePrice.find((item) => item[sizeBlock.value]);
		if (foundElement) {
			sumSize = foundElement[sizeBlock.value];
		} else sumSize = 0;

		foundElement = materialPrice.find((item) => item[materialBlock.value]);
		if (foundElement) {
			coefficient = foundElement[materialBlock.value];
		} else coefficient = 0;

		foundElement = optionsPrice.find((item) => item[optionsBlock.value]);
		if (foundElement) {
			sumOption = foundElement[optionsBlock.value];
		} else sumOption = 0;

		sum = Math.round(sumSize * coefficient + sumOption);
		if (sumSize === 0 || coefficient === 0) {
			resultBlock.textContent = "Выберите размер и материал картины";
		} else if (promoCodeBlock.value === "IWANTPOPART") {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else resultBlock.textContent = sum;
	};

	sizeBlock.addEventListener("change", handlerCalc);
	materialBlock.addEventListener("change", handlerCalc);
	optionsBlock.addEventListener("change", handlerCalc);
	promoCodeBlock.addEventListener("input", handlerCalc);
};
