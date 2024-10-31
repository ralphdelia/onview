import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import SearchScript from '../components/SearchScript';

const SearchPage = () => {
	return (
		<Layout>
			<SearchScript />
			<NavBar />
			<Search />
		</Layout>
	);
};

export default SearchPage;
