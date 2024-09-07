import { Layout } from '../components/Layout';
import { NavBar } from '../components/NavBar';

const NotFound = () => {
	return (
		<Layout>
			<NavBar />
			<h1>404</h1>
			<p class="tagline">page not found</p>
		</Layout>
	);
};
export default NotFound;
