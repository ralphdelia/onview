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
				<li>
					<div id="theme-toggle-icon">
						<span class="material-icons light">light_mode</span>
						<span class="material-icons dark">dark_mode</span>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
