//#region PureJS_scrolling

export const smoothScroll = (element, body, from, to, hash) => {
	let timeInterval = 1;
	let prevScrollTop, speed;

	if (to > from) {
		speed = 30;
	} else {
		speed = -30;
	}

	const move = setInterval(function () {
		let scrollTop = Math.round(body.scrollTop || element.scrollTop);
		if (
			prevScrollTop === scrollTop ||
			(to > from && scrollTop >= to) ||
			(to < from && scrollTop <= to)
		) {
			clearInterval(move);
			history.replaceState(
				history.state,
				document.title,
				location.href.replace(/#.*$/g, "") + hash
			);
		} else {
			body.scrollTop += speed;
			element.scrollTop += speed;
			prevScrollTop = scrollTop;
		}
	}, timeInterval);
};

const calcScroll = (upElem) => {
	const docElement = document.documentElement;
	const body = document.body;

	upElem.addEventListener("click", function (event) {
		let scrollTop = Math.round(body.scrollTop || docElement.scrollTop);

		if (this.hash !== "") {
			event.preventDefault();
			let hashElement = document.querySelector(this.hash);
			let hashElementTop = 0;

			while (hashElement.offsetParent) {
				hashElementTop += hashElement.offsetTop;
				hashElement = hashElement.offsetParent;
			}
			hashElementTop = Math.round(hashElementTop);
			smoothScroll(docElement, body, scrollTop, hashElementTop, this.hash);
		}
	});
};

//#endregion PureJS_scrolling

export const scrolling = (upSelector) => {
	const btnUp = document.querySelector(upSelector);
	btnUp.classList.add("animated");

	window.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop > 1650) {
			// btnUp.style.opacity = "1";
			btnUp.classList.add("fadeIn");
			btnUp.classList.remove("fadeOut");
		} else {
			// btnUp.style.opacity = "0";
			btnUp.classList.add("fadeOut");
			btnUp.classList.remove("fadeIn");
		}
	});

	// // PureJS_scrolling;
	// calcScroll(btnUp);

	// Scrolling with requestAnimationFrame()
	const links = document.querySelectorAll('[href^="#"]');
	const speed = 0.3;
	// console.log(links);
	links.forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			const widthTop = document.documentElement.scrollTop;
			const hash = this.hash;
			const toBlock = document.querySelector(hash).getBoundingClientRect().top;
			let start = null;

			const step = (time) => {
				if (start === null) {
					start = time;
				}

				let progress = time - start;

				let r =
					toBlock < 0
						? Math.max(widthTop - progress / speed, widthTop + toBlock)
						: Math.min(widthTop + progress / speed, widthTop + toBlock);

				document.documentElement.scrollTo(0, r);

				if (r != widthTop + toBlock) {
					requestAnimationFrame(step);
				} else {
					// console.log(location);
					location.hash = hash;
				}
			};

			requestAnimationFrame(step);
		});
	});
};
