import { allArtworks } from '../lib/artworks';

// Get all artwork IDs
const artworkIds = allArtworks.map((art) => art.objectID);

// Navigate to a random artwork
export function navigateToRandomArtwork(event?: Event) {
	if (event) {
		event.preventDefault();
	}

	const randomId = artworkIds[Math.floor(Math.random() * artworkIds.length)];
	window.location.href = `/artwork/${randomId}`;
}

// Expose to window for inline onclick handlers
if (typeof window !== 'undefined') {
	(window as any).navigateToRandomArtwork = navigateToRandomArtwork;
}
