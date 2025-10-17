import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Search from '../components/Search';

const SearchPage = () => {
	return (
		<Layout
			title="Search Artworks - OnView"
			description="Search through over 2000 paintings from the Metropolitan Museum of Art by title or artist name."
			url="https://onview.dev/search"
			scripts={['/static/javascript/search.js']}
		>
			<NavBar />
			<Search />
		</Layout>
	);
};

export default SearchPage;
