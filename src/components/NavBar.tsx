const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<strong>
						<a href="/">OnView</a>
					</strong>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/explore">Explore</a>
				</li>
				<li>
					<a href="/search">Search</a>
				</li>
				<li>
					<a href="/random">Random</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
			<ul>
				<svg id="theme-toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<circle cx="12" cy="12" r="5" class="sun-core" />
					<g class="sun-rays">
						<line x1="12" y1="2" x2="12" y2="4" />
						<line x1="12" y1="20" x2="12" y2="22" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="2" y1="12" x2="4" y2="12" />
						<line x1="20" y1="12" x2="22" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</g>

					<path class="moon" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
				</svg>
			</ul>
		</nav>
	);
};

export default NavBar;
