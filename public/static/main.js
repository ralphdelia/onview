document.addEventListener('DOMContentLoaded', () => {
	const themePreference = localStorage.getItem('theme');
	if (themePreference) {
		document.documentElement.dataset.theme = themePreference;
	}

	document.getElementById('theme-toggle-icon').addEventListener('click', (e) => {
		e.preventDefault();
		const htmlElement = document.documentElement;
		let newTheme;
		if (htmlElement.dataset.theme === 'light') {
			newTheme = 'dark';
		} else {
			newTheme = 'light';
		}
		htmlElement.dataset.theme = newTheme;
		localStorage.setItem('theme', newTheme);
	});

	if (window.location.pathname === '/explore') {
		const addLoadButtonListener = () => {
			const loadMoreButton = document.getElementById('load-more-btn');

			loadMoreButton.addEventListener('click', async (e) => {
				e.preventDefault();
				const action = e.currentTarget.dataset.action;
				try {
					const res = await fetch(action);

					if (!res.ok) {
						throw new Error('Non 200 Response');
					}

					const resHTML = await res.text();
					loadMoreButton.outerHTML = resHTML;
				} catch (e) {
					console.error('Error fetching: ' + action, e);
				}

				addLoadButtonListener(); // Add listener for new button
			});
		};

		addLoadButtonListener();
	}

	if (window.location.pathname === '/search') {
		const searchBox = document.querySelector('input[type=search]');
		let timeoutId;
		searchBox.addEventListener('input', (e) => {
			clearInterval(timeoutId);

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
	}
});
