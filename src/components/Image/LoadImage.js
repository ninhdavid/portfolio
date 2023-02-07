import { forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './LoadImage.module.scss';

import images from '~/assets/images';
import { useInViewport } from '~/hooks/useInViewport';

// const useLazyLoad = (src, fallback, inViewport) => {
// 	const [imageSrc, setImageSrc] = useState(fallback);

// 	useEffect(() => {
// 		if (!inViewport) return;
// 		const image = new Image();
// 		image.src = src;
// 		image.onload = () => setImageSrc(src);
// 	}, [src, fallback, inViewport]);

// 	return imageSrc;
// };
const LoadImage = forwardRef(
	(
		{
			src,
			alt,
			className,
			fallback: customFallback = images.noImage,
			...props
		},
		ref
	) => {
		const inViewport = useInViewport(ref);
		const [fallback, setFallback] = useState(customFallback);

		useEffect(() => {
			if (!inViewport) {
				return;
			}

			const image = new Image();
			image.src = src;
			image.onload = () => {
				setFallback(src);
			};
		}, [inViewport, src]);
		console.log(inViewport);

		return (
			<>
				<style>
					{`
					@keyframes up { 
						from { transform:translateY(110%); }
						to { transform:translateY(0%) ;}
						}
					
					`}
				</style>
				<img
					className={classNames(styles.wrapper, className)}
					src={fallback}
					ref={ref}
					alt={alt}
					{...props}
					style={{
						opacity: inViewport ? 1 : 0,
						transition: 'opacity 1s ease-in-out',
						animation: 'up 1s linear',
					}}
				/>
			</>
		);
	}
);
export default LoadImage;
