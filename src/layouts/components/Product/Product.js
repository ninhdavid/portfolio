import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useWindowSize } from '~/hooks';

import 'swiper/scss';
import 'swiper/css/bundle';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Grid from '~/components/Grid';
import ProductMenu, { ProductItem } from './Menu';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Product() {
	const { width } = useWindowSize();

	const product = [
		{
			src: `${images.product1}`,
			href: 'http://doommad.byethost16.com/',
			link: 'doommad.byethost16.com',
			tag: 'Source code: ',
			description: 'description',
			source: 's',
		},
		{
			src: `${images.product1}`,
			href: 'http://doommad.byethost16.com/',
			link: 'doommad.byethost16.com',
			tag: 'Source code: ',
			description: 'description',
			source: 's',
		},
		{
			src: '../src/assets/images/userAvatar.jpg',
			href: 'http://doommad.byethost16.com/',
			link: 'doommad.byethost16.com',
			tag: 'Source code: ',
			description: 'description',
			source: 's',
		},
	];

	return (
		<>
			<div className={cx('wrapper')}>
				<h1 className={cx('title-container')}>Work</h1>
				<Grid>
					{width >= 768 && width <= 1024 ? (
						<Swiper
							modules={[Navigation]}
							navigation={true}
							pagination={{ clickable: true }}
							spaceBetween={50}
							slidesPerView={1}
							className={cx('product-slider')}
						>
							<ProductMenu>
								{product.map((result, index) => (
									<SwiperSlide key={index}>
										<ProductItem props={result} />
									</SwiperSlide>
								))}
							</ProductMenu>
						</Swiper>
					) : (
						<ProductMenu>
							{product.map((result, index) => (
								<ProductItem key={index} props={result} />
							))}
						</ProductMenu>
					)}
				</Grid>
			</div>
		</>
	);
}

export default Product;
