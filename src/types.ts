import { z } from 'zod';

export interface Bindings {
	DB: D1Database;
	VECTORIZE: Vectorize;
	ASSETS: {
		fetch: (url: string | Request) => Promise<Response>;
	};
}

// Full artwork record
export const artworkRecordSchema = z.object({
	objectID: z.number(),
	isHighlight: z.string(),
	primaryImageSmall: z.string(),
	title: z.string(),
	culture: z.string(),
	artistDisplayName: z.string(),
	artistDisplayBio: z.string(),
	objectDate: z.string(),
	medium: z.string(),
	dimensions: z.string(),
	galleryNumber: z.string(),
	embeddings: z.string(),
});
export type ArtworkRecord = z.infer<typeof artworkRecordSchema>;

// Without embeddings
export const artworkWithoutEmbeddingSchema = artworkRecordSchema.omit({
	embeddings: true,
});
export type ArtworkWithoutEmbeddings = z.infer<
	typeof artworkWithoutEmbeddingSchema
>;

// Array of Artworks without embeddings
export const artworksWithoutEmbeddingsSchema = z.array(
	artworkRecordSchema.omit({ embeddings: true }),
);
export type ArtworksWithoutEmbeddings = z.infer<
	typeof artworksWithoutEmbeddingsSchema
>;

// Artwork Serach Results
export const artworkSearchResultsSchema = z.array(
	artworkRecordSchema.pick({
		objectID: true,
		title: true,
		artistDisplayName: true,
		isHighlight: true,
	}),
);
export type ArtworkSearchResults = z.infer<typeof artworkSearchResultsSchema>;

// Vectorize Metadata
export const vectorizeVectorMetadataSchema = z.object({
	artistDisplayName: z.string(),
	objectDate: z.string(),
	objectID: z.number(),
	primaryImageSmall: z.string(),
	title: z.string(),
});
export type VectorizeVectorMetadata = z.infer<
	typeof vectorizeVectorMetadataSchema
>;

// Vectorize Match
const vectorizeMatchSchema = z.object({
	metadata: vectorizeVectorMetadataSchema,
});
// Vectorize Matches
export const vectorizeMatchesSchema = z.array(vectorizeMatchSchema);
export type VectorizeMatch = z.infer<typeof vectorizeMatchesSchema>;
