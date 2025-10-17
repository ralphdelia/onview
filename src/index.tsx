import { Hono } from 'hono';

import ArtworkPage from './pages/ArtworkPage';
import { Bindings } from './types';
import ExplorePage from './pages/ExplorePage';
import ArtworksGrid from './components/ArtworksGrid';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchRows from './components/SearchRows';
import AboutPage from './pages/AboutPage';
import { getArtworkById, getRelatedArtworks, getArtworksPaginated, getRandomArtworkId } from './data/artworks';
import { searchArtworks } from './data/search';

const app = new Hono<{ Bindings: Bindings }>();
app.get('/', (c) => {
	return c.html(<HomePage />);
});

app.get('/artwork/:id', async (c) => {
	try {
		const id = c.req.param('id');

		const selectedArtwork = await getArtworkById(c.env.DB, id);

		if (!selectedArtwork) {
			return c.html(<NotFound message="artwork not found" />, 404);
		}

		const embeddings = JSON.parse(selectedArtwork.embeddings);
		const relatedArtworks = await getRelatedArtworks(c.env.VECTORIZE, embeddings, id);

		return c.html(<ArtworkPage artworkInfo={selectedArtwork} relatedArtworks={relatedArtworks} />);
	} catch (error) {
		console.error('Error loading artwork:', error);
		return c.html(<ErrorPage />, 500);
	}
});

app.get('/explore', async (c) => {
	try {
		const artworks = await getArtworksPaginated(c.env.DB, 30, 0);
		return c.html(<ExplorePage artworks={artworks} />);
	} catch (error) {
		console.error('Error loading explore page:', error);
		return c.html(<ErrorPage />, 500);
	}
});

app.get('/api/explore', async (c) => {
	try {
		let pageParam = c.req.query('page');
		if (!pageParam) return c.html(<p>An unexpected error occured..</p>);

		const pageNumber = parseInt(pageParam, 10);
		if (isNaN(pageNumber)) return c.html(<p>An unexpected error occured..</p>);

		const limit = 30;
		const offset = 30 * (pageNumber - 1);
		const artworks = await getArtworksPaginated(c.env.DB, limit, offset);

		if (artworks.length === 0) {
			return c.html(
				<button class="load" disabled>
					Load More
				</button>,
			);
		}

		return c.html(<ArtworksGrid artworks={artworks} pageNumber={pageNumber} />);
	} catch (error) {
		console.error('Error loading more artworks:', error);
		return c.html(<p>An unexpected error occured..</p>);
	}
});

app.get('/random', async (c) => {
	try {
		const objectID = await getRandomArtworkId(c.env.DB);
		return c.redirect(`/artwork/${objectID}`);
	} catch (error) {
		console.error('Error loading random artwork:', error);
		return c.html(<ErrorPage />, 500);
	}
});

app.get('/search', (c) => {
	return c.html(<SearchPage />);
});

app.post('/search', async (c) => {
	try {
		const { searchTerm } = await c.req.json();
		const searchableData = await searchArtworks(c.env.DB, searchTerm);
		return c.html(<SearchRows results={searchableData} />);
	} catch (error) {
		console.error('Error searching artworks:', error);
		return c.html(<p>An unexpected error occured..</p>);
	}
});

app.get('/about', (c) => {
	return c.html(<AboutPage />);
});

// fallback
app.get('*', (c) => c.html(<NotFound message="page not found" />, 404));

export default app;
