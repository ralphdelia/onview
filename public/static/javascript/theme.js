document.addEventListener('DOMContentLoaded', () => {
	const themePreference = localStorage.getItem('theme');
	if (themePreference) {
		document.documentElement.dataset.theme = themePreference;
	}

	document
		.getElementById('theme-toggle-icon')
		.addEventListener('click', (e) => {
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
});
