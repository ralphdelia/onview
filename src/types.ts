export interface Bindings {
	DB: D1Database;
	VECTORIZE: Vectorize;
}

export interface ArtworkRecord {
	objectID: number;
	isHighlight: string;
	primaryImageSmall: string;
	title: string;
	culture: string;
	artistDisplayName: string;
	artistDisplayBio: string;
	objectDate: string;
	medium: string;
	dimensions: string;
	galleryNumber: string;
	embeddings: string;
}

export type ArtworkWithoutEmbeddings = Omit<ArtworkRecord, 'embeddings'>;
export type SearchParams = Pick<ArtworkRecord, 'objectID' | 'title' | 'artistDisplayName' | 'isHighlight'>;

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

export interface VectorizeVectorMetadata {
	artistDisplayName: string;
	objectDate: string;
	objectID: number;
	primaryImageSmall: string;
	title: string;
}

export interface VectorizeMatch {
	metadata: VectorizeVectorMetadata;
}
