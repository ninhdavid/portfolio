const { useState, useEffect } = require('react');

export function useInViewport(ref, threshold = 0.5) {
	const [inViewport, setInViewport] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInViewport(true);
						observer.disconnect();
					}
				});
			},
			{ threshold }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [ref, threshold]);

	return inViewport;
}
