import { Hono } from 'hono';
import ArtworkPage from './pages/ArtworkPage';
import { Bindings, ArtworkWithoutEmbeddings, VectorizeMatch, isArtworkRecord } from './types';
import { ExplorePage } from './pages/ExplorePage';
import { ArtworksGrid } from './components/ArtworksGrid';

const app = new Hono<{ Bindings: Bindings }>();

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
	//TODO: make custom 404 page
	if (!isArtworkRecord(selectedArtwork)) return c.json(selectedArtwork);

	const embeddings = JSON.parse(selectedArtwork.embeddings);
	const matches = await c.env.VECTORIZE.query(embeddings, {
		returnMetadata: true,
		topK: 18,
		filter: { objectID: { $ne: id } },
	});
	const matchedArtworks = matches.matches as unknown as VectorizeMatch[];
	return c.html(<ArtworkPage artworkInfo={selectedArtwork} relatedArtworks={matchedArtworks} />);
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
    LIMIT 30
         `);
	const { results } = await stmt.run();

	return c.html(<ExplorePage artworks={results as ArtworkWithoutEmbeddings[]} />);
});

app.get('/api/explore', async (c) => {
	let pageParam = c.req.query('page');
	if (!pageParam) return c.html(<p>An unexpected error occured..</p>);
	const pageNumber = parseInt(pageParam, 10);
	const limit = 30 * pageNumber;
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
    LIMIT ?
    OFFSET ?
    `);
	const { results } = await stmt.bind(limit, offset).all();

	return c.html(<ArtworksGrid artworks={results as ArtworkWithoutEmbeddings[]} pageNumber={pageNumber} />);
});

export default app;
