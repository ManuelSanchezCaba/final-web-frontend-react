async function getComics() {
	return await fetch('http://localhost:4000/comics')
		.then((res) => res.json())
		.catch((err) => err.json());
}

async function getComicByName(name) {
	return await fetch('http://localhost:4000/comics', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name }),
	})
		.then((res) => res.json())
		.catch((err) => err.json());
}

module.exports = {
	getComics,
	getComicByName,
};
