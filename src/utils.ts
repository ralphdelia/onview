import { ArtworkRecord, ArtworkWithoutEmbeddings, SearchableData, VectorizeMatch } from './types';

export const toArtworkWithoutEmbedding = (searchResults: Record<string, unknown>[]): ArtworkWithoutEmbeddings[] => {
	return searchResults.map((artwork) => ({
		objectID: Number(artwork.objectID ?? 0),
		isHighlight: String(artwork.isHighlight ?? ''),
		primaryImageSmall: String(artwork.primaryImageSmall ?? ''),
		title: String(artwork.title ?? ''),
		culture: String(artwork.culture ?? ''),
		artistDisplayName: String(artwork.artistDisplayName ?? ''),
		artistDisplayBio: String(artwork.artistDisplayBio ?? ''),
		objectDate: String(artwork.objectDate ?? ''),
		medium: String(artwork.medium ?? ''),
		dimensions: String(artwork.dimensions ?? ''),
		galleryNumber: String(artwork.galleryNumber ?? ''),
	}));
};

export const isArtworkRecord = (obj: any): obj is ArtworkRecord => {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof obj.objectID === 'number' &&
		typeof obj.isHighlight === 'string' &&
		typeof obj.primaryImageSmall === 'string' &&
		typeof obj.title === 'string' &&
		typeof obj.culture === 'string' &&
		typeof obj.artistDisplayName === 'string' &&
		typeof obj.artistDisplayBio === 'string' &&
		typeof obj.objectDate === 'string' &&
		typeof obj.medium === 'string' &&
		typeof obj.dimensions === 'string' &&
		typeof obj.galleryNumber === 'string' &&
		typeof obj.embeddings === 'string'
	);
};

export const toSearchableData = (searchResults: Record<string, unknown>[]): SearchableData[] => {
	return searchResults.map((data) => ({
		objectID: Number(data.objectID ?? 0),
		title: String(data.title ?? ''),
		artistDisplayName: String(data.artistDisplayName ?? ''),
		isHighlight: String(data.isHighlight ?? ''),
	}));
};

export const toVectorizeMatches = (vectorizeMatches: VectorizeMatches): VectorizeMatch[] => {
	return (
		vectorizeMatches.matches?.map((match) => ({
			metadata: {
				artistDisplayName: String(match.metadata?.artistDisplayName ?? ''),
				objectDate: String(match.metadata?.objectDate ?? ''),
				objectID: Number(match.metadata?.objectID ?? 0),
				primaryImageSmall: String(match.metadata?.primaryImageSmall ?? ''),
				title: String(match.metadata?.title ?? ''),
			},
		})) || []
	);
};
