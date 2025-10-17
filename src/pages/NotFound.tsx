import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const NotFound = () => {
	return (
		<Layout
			title="Page Not Found - OnView"
			description="The page you're looking for doesn't exist. Explore artworks from the Metropolitan Museum of Art's collection."
		>
			<NavBar />
			<h1>404</h1>
			<p class="tagline">page not found</p>
		</Layout>
	);
};
export default NotFound;
