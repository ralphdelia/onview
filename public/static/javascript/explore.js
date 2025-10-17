document.addEventListener('DOMContentLoaded', () => {
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

			addLoadButtonListener();
		});
	};

	addLoadButtonListener();
});
