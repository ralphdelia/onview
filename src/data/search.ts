import type { ArtworkSearchResults } from '../types';
import { artworkSearchResultsSchema } from '../types';

export async function searchArtworks(db: D1Database, searchTerm: string): Promise<ArtworkSearchResults> {
	const stmt = db.prepare(`
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
	return artworkSearchResultsSchema.parse(results);
}
