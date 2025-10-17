import type {
	ArtworkRecord,
	ArtworksWithoutEmbeddings,
	VectorizeMatch,
} from '../types';
import {
	artworkRecordSchema,
	artworksWithoutEmbeddingsSchema,
	vectorizeMatchesSchema,
} from '../types';

export async function getArtworkById(
	db: D1Database,
	id: string,
): Promise<ArtworkRecord | null> {
	const stmt = db.prepare(`
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
	if (!results[0]) {
		return null;
	}

	return artworkRecordSchema.parse(results[0]);
}

export async function getRelatedArtworks(
	vectorize: Vectorize,
	embeddings: number[],
	excludeId: string,
): Promise<VectorizeMatch> {
	const { matches } = await vectorize.query(embeddings, {
		returnMetadata: true,
		topK: 18,
		filter: { objectID: { $ne: excludeId } },
	});

	return vectorizeMatchesSchema.parse(matches);
}

export async function getArtworksPaginated(
	db: D1Database,
	limit: number,
	offset: number,
): Promise<ArtworksWithoutEmbeddings> {
	const stmt = db.prepare(`
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
	return artworksWithoutEmbeddingsSchema.parse(results);
}

export async function getRandomArtworkId(db: D1Database): Promise<number> {
	const stmt = db.prepare(`
    SELECT
      object_id as "objectID"
    FROM
      artworks
    ORDER BY
      RANDOM()
    LIMIT 1
    `);

	const { results } = await stmt.run();
	return results[0].objectID as number;
}
