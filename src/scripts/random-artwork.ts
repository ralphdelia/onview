import { allArtworks } from '../lib/artworks';

const artworkIds = allArtworks.map((art) => art.objectID);

export function navigateToRandomArtwork(event?: Event) {
	if (event) {
		event.preventDefault();
	}

	const randomId = artworkIds[Math.floor(Math.random() * artworkIds.length)];
	window.location.href = `/artwork/${randomId}/`;
}

// Expose to window for inline onclick handlers
if (typeof window !== 'undefined') {
	(window as any).navigateToRandomArtwork = navigateToRandomArtwork;
}
