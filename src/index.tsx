import { Hono } from 'hono';
import ArtworkPage from './pages/ArtworkPage';
import { Bindings, ArtworkWithoutEmbeddings, VectorizeMatch, SearchableData } from './types';
import ExplorePage from './pages/ExplorePage';
import ArtworksGrid from './components/ArtworksGrid';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchRows from './components/SearchRows';
import AboutPage from './pages/AboutPage';
import { isArtworkRecord, toArtworkWithoutEmbedding, toSearchableData, toVectorizeMatches } from './utils';

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
	return c.html(<HomePage />);
});

app.get('/artwork/:id', async (c) => {
	const id = c.req.param('id');
	const stmt = c.env.DB.prepare(`
	SELECT
    object_id AS "objectID",
    is_highlight AS "isHighlight",
    primary_image_small AS "primaryImageSmall",
    title AS "title",
    culture AS "culture",
    artist_display_name AS "artistDisplayName",
    artist_display_bio AS "artistDisplayBio",
    object_date AS "objectDate",
    medium AS "medium",
    dimensions AS "dimensions",
    gallery_number AS "galleryNumber",
    embeddings
  FROM
      artworks
  WHERE
      object_id = ?;
`);

	const { results } = await stmt.bind(id).run();
	const selectedArtwork = results[0];
	if (!isArtworkRecord(selectedArtwork)) return c.html(<NotFound />);

	const embeddings = JSON.parse(selectedArtwork.embeddings);
	const matches = await c.env.VECTORIZE.query(embeddings, {
		returnMetadata: true,
		topK: 18,
		filter: { objectID: { $ne: id } },
	});
	const transformedMatches: VectorizeMatch[] = toVectorizeMatches(matches);

	return c.html(<ArtworkPage artworkInfo={selectedArtwork} relatedArtworks={transformedMatches} />);
});

app.get('/explore', async (c) => {
	const stmt = c.env.DB.prepare(`
    SELECT
      object_id AS "objectID",
      is_highlight AS "isHighlight",
      primary_image_small AS "primaryImageSmall",
      title AS "title",
      culture AS "culture",
      artist_display_name AS "artistDisplayName",
      artist_display_bio AS "artistDisplayBio",
      object_date AS "objectDate",
      medium AS "medium",
      dimensions AS "dimensions",
      gallery_number AS "galleryNumber"
    FROM
      artworks
    ORDER BY
      id ASC
    LIMIT 30
         `);
	const { results } = await stmt.run();
	const artworks: ArtworkWithoutEmbeddings[] = toArtworkWithoutEmbedding(results);

	return c.html(<ExplorePage artworks={artworks} />);
});

app.get('/api/explore', async (c) => {
	let pageParam = c.req.query('page');
	if (!pageParam) return c.html(<p>An unexpected error occured..</p>);

	const pageNumber = parseInt(pageParam, 10);
	if (isNaN(pageNumber)) return c.html(<p>An unexpected error occured..</p>);

	const limit = 30;
	const offset = 30 * (pageNumber - 1);
	const stmt = c.env.DB.prepare(`
    SELECT
      object_id AS "objectID",
      is_highlight AS "isHighlight",
      primary_image_small AS "primaryImageSmall",
      title AS "title",
      culture AS "culture",
      artist_display_name AS "artistDisplayName",
      artist_display_bio AS "artistDisplayBio",
      object_date AS "objectDate",
      medium AS "medium",
      dimensions AS "dimensions",
      gallery_number AS "galleryNumber"
    FROM
      artworks
    ORDER BY
      id ASC
    LIMIT ?
    OFFSET ?
    `);
	const { results } = await stmt.bind(limit, offset).all();

	if (results.length === 0) {
		return c.html(
			<button class="load" disabled>
				Load More
			</button>,
		);
	}
	const artworks: ArtworkWithoutEmbeddings[] = toArtworkWithoutEmbedding(results);

	return c.html(<ArtworksGrid artworks={artworks} pageNumber={pageNumber} />);
});

app.get('/random', async (c) => {
	const stmt = c.env.DB.prepare(`
    SELECT
      object_id as "objectID"
    FROM
      artworks
    ORDER BY
      RANDOM()
    LIMIT 1
    `);
	const { results } = await stmt.run();
	const objectID = results[0].objectID;

	return c.redirect(`/artwork/${objectID}`);
});

app.get('/search', (c) => {
	return c.html(<SearchPage />);
});

app.post('/search', async (c) => {
	const { searchTerm } = await c.req.json();
	const stmt = c.env.DB.prepare(`
    SELECT
      object_id AS "objectID",
      is_highlight AS "isHighlight",
      title,
      artist_display_name AS "artistDisplayName"
    FROM
      artworks
    WHERE
      title LIKE ? OR artist_display_name LIKE ?
    ORDER BY
      artist_display_name ASC
    `);
	const { results } = await stmt.bind(`%${searchTerm}%`, `%${searchTerm}%`).all();
	const searchableData: SearchableData[] = toSearchableData(results);

	return c.html(<SearchRows results={searchableData} />);
});

app.get('/about', (c) => {
	return c.html(<AboutPage />);
});

// fallback
app.get('*', (c) => c.html(<NotFound />));

export default app;
