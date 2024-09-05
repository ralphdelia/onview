import { Hono } from 'hono';
interface Bindings {
	DB: D1Database;
}
const app = new Hono<{ Bindings: Bindings }>();
app.get('/', async (c) => {
	const stmt = c.env.DB.prepare('SELECT * FROM artworks LIMIT 3');
	const { results } = await stmt.all();

	return c.json(results);
});

export default app;
