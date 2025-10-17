document.addEventListener('DOMContentLoaded', () => {
	const searchBox = document.querySelector('input[type=search]');
	let timeoutId;
	searchBox.addEventListener('input', (e) => {
		clearTimeout(timeoutId);

		const searchTerm = e.target.value;
		timeoutId = setTimeout(async () => {
			try {
				const res = await fetch('/search', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ searchTerm }),
				});

				if (!res.ok) {
					throw new Error('Non 200 response');
				}

				const tableRows = await res.text();
				document.getElementById('search-results').innerHTML = tableRows;
			} catch (e) {
				console.error('Error fetching search results', e);
			}
		}, 500);
	});
});
