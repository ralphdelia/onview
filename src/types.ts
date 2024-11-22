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

export type SearchableData = Pick<ArtworkRecord, 'objectID' | 'title' | 'artistDisplayName' | 'isHighlight'>;

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
