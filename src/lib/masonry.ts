export interface MasonryItem {
	imageDimensions: {
		small: {
			width: number;
			height: number;
		};
	};
}

export function distributeByAspectRatio<T extends MasonryItem>(
	items: T[],
	columnCount: number,
): T[][] {
	const columns: T[][] = Array.from({ length: columnCount }, () => []);
	const columnHeights: number[] = Array(columnCount).fill(0);

	items.forEach((item) => {
		// Just use the aspect ratio (height/width)
		const aspectRatio =
			item.imageDimensions.small.height / item.imageDimensions.small.width;

		// Find column with least accumulated aspect ratio
		const shortestColumnIndex = columnHeights.indexOf(
			Math.min(...columnHeights),
		);

		// Add item to shortest column
		columns[shortestColumnIndex].push(item);
		columnHeights[shortestColumnIndex] += aspectRatio;
	});

	return columns;
}
