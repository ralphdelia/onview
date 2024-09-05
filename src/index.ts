import { Hono } from 'hono';
interface Bindings {
	DB: D1Database;
	VECTORIZE: Vectorize;
}

const app = new Hono<{ Bindings: Bindings }>();
app.get('/', async (c) => {
	const { results } = await c.env.DB.prepare('SELECT embeddings FROM artworks WHERE object_id = ?').bind(3963).all();
	const matched = await c.env.VECTORIZE.query(JSON.parse(results[0].embeddings), { returnMetadata: true });
	const matchedIDs = matched.matches.map((ele) => ele.metadata.objectID);
	const query = `
  SELECT object_id, title, artist_display_name
  FROM artworks
  WHERE object_id IN (?, ?, ?, ?, ?)
`;
	const artworks = await c.env.DB.prepare(query)
		.bind(...matchedIDs)
		.all();

	return c.json(artworks.results);
});

export default app;
