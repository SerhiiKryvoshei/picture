import { calcScroll } from "../helpers/calcScroll";

const closeModals = (windows) => {
	windows.forEach((item) => {
		item.style.display = "none";
	});
};

const isOpenModalWindow = (windows) => {
	windows.forEach((item) => {
		if (getComputedStyle(item).display !== "none") return true;
	});
	return false;
};

function bindModal(
	triggerSelector,
	modalSelector,
	closeSelector,
	closeClickOverlay = true
) {
	const trigger = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);
	const close = document.querySelector(closeSelector);
	const windows = document.querySelectorAll("[data-modal]");

	const scroll = calcScroll();

	trigger.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target) {
				e.preventDefault();
			}
			closeModals(windows);
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${scroll}px`;
		});
	});

	close.addEventListener("click", () => {
		closeModals(windows);
		modal.style.display = "none";
		document.body.style.overflow = "";
		document.body.style.marginRight = "0px";
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal && closeClickOverlay) {
			closeModals(windows);
			modal.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = "0px";
		}
	});
}

function showModalByTime(selector, time) {
	setTimeout(() => {
		const windows = document.querySelectorAll("[data-modal]");
		if (!isOpenModalWindow(windows)) {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}
	}, time);
}

export const modals = () => {
	bindModal(
		".button-order.button-design",
		".popup-design",
		".popup-design .popup-close"
	);
	bindModal(
		".button-order.button-consultation",
		".popup-consultation",
		".popup-consultation .popup-close"
	);

	showModalByTime(".popup-consultation", 60000);
};
