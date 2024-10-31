import { html } from 'hono/html';

const InfiniteScrollScript = () => {
	return html`<script>
		document.addEventListener('DOMContentLoaded', () => {
			const addLoadButtonListener = () => {
				const loadMoreButton = document.getElementById('load-more-btn');

				loadMoreButton.addEventListener('click', async (e) => {
					e.preventDefault();
					const action = e.currentTarget.dataset.action;

					const res = await fetch(action);
					const resHTML = await res.text();
					loadMoreButton.outerHTML = resHTML;

					addLoadButtonListener(); // add listener for new button
				});
			};

			addLoadButtonListener();
		});
	</script> `;
};

export default InfiniteScrollScript;
