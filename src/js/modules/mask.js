export const mask = (selector) => {
	const matrix = "+38(0__) ___-__-__";
	const def = matrix.replace(/\D/g, "");

	const setCursorPosition = (position, element) => {
		element.focus();

		//HTMLInputElement.setSelectionRange();
		if (element.setSelectionRange) {
			element.setSelectionRange(position, position);
		} else if (element.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd("character", position);
			range.moveStart("character", position);
			range.select();
		}
	};

	function createMask(event) {
		event.preventDefault();
		let i = 0;
		let val = this.value.replace(/\D/g, "");

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, (a) => {
			return /[_\d]/g.test(a) && i < val.length
				? val.charAt(i++)
				: i >= val.length
				? ""
				: a;
		});

		if (event.type === "blur") {
			if (this.value.length == 2) {
				this.value = "";
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	const inputs = document.querySelectorAll(selector);
	inputs.forEach((input) => {
		input.addEventListener("input", createMask);
		input.addEventListener("focus", createMask);
		input.addEventListener("blur", createMask);
	});
};
