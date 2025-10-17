import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

interface NotFoundProps {
	message?: string;
}

const NotFound = ({ message = 'page not found' }: NotFoundProps) => {
	return (
		<Layout
			title="Page Not Found - OnView"
			description="The page you're looking for doesn't exist. Explore artworks from the Metropolitan Museum of Art's collection."
		>
			<NavBar />
			<h1>404</h1>
			<p class="tagline">{message}</p>
		</Layout>
	);
};
export default NotFound;
