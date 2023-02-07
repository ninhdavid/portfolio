import classNames from 'classnames/bind';
import styles from './ProductMenu.module.scss';
import { SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const cx = classNames.bind(styles);
function ProductMenu({ children }) {
	const className = cx('product-menu');

	return <div className={className}>{children}</div>;
}

export default ProductMenu;
