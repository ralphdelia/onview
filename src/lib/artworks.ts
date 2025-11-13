import artworksData from '../data/artworks.json';

export interface Artwork {
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
	relatedArtworks: number[];
	images: {
		small: string;
		medium: string;
		large: string;
	};
	imageDimensions: {
		small: {
			width: number;
			height: number;
		};
		medium: {
			width: number;
			height: number;
		};
		large: {
			width: number;
			height: number;
		};
	};
	processed?: boolean;
}

interface ArtworksData {
	version: string;
	exportedAt: string;
	totalArtworks: number;
	artworks: Artwork[];
}

export const allArtworks: Artwork[] = (artworksData as ArtworksData).artworks;

export function getArtworkById(id: number): Artwork | undefined {
	return allArtworks.find((art) => art.objectID === id);
}

export function getRelatedArtworks(ids: number[]): Artwork[] {
	return ids
		.map((id) => getArtworkById(id))
		.filter((art): art is Artwork => art !== undefined);
}

export function getArtworksPaginated(limit: number, offset: number): Artwork[] {
	return allArtworks.slice(offset, offset + limit);
}

export function getRandomArtwork(): Artwork {
	return allArtworks[Math.floor(Math.random() * allArtworks.length)];
}

export function searchArtworks(query: string): Artwork[] {
	const lowerQuery = query.toLowerCase();
	return allArtworks.filter(
		(art) =>
			art.title.toLowerCase().includes(lowerQuery) ||
			art.artistDisplayName.toLowerCase().includes(lowerQuery) ||
			art.culture.toLowerCase().includes(lowerQuery) ||
			art.medium.toLowerCase().includes(lowerQuery),
	);
}
