import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
	return (
		<Layout
			title="Error - OnView"
			description="Something went wrong. Please try again later."
		>
			<NavBar />
			<h1>Oops!</h1>
			<p class="tagline">Something went wrong. Please try again later.</p>
		</Layout>
	);
};
export default ErrorPage;
