export const postData = async (url, data) => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: data,
	});
	return await response.json();
};

export const getResource = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		const textError = `Could not fetch ${url}, status: ${response.status}`;
		throw new Error(textError);
	}

	return await response.json();
};
