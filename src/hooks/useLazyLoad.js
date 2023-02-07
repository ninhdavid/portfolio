import { useEffect, useState } from 'react';

export const useLazyLoad = (src, fallback, inViewport) => {
	const [imageSrc, setImageSrc] = useState(fallback);

	useEffect(() => {
		if (!inViewport) return;
		const image = new Image();
		image.src = src;
		image.onload = () => setImageSrc(src);
	}, [src, fallback, inViewport]);

	return imageSrc;
};
