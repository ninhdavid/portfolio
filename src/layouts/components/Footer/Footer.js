import { useWindowSize } from '~/hooks';

import classNames from 'classnames/bind';
import SocialIcon from '../SocialIcon/SocialIcon';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
	const { width } = useWindowSize;
	return (
		<>
			{width <= 767 ? (
				<div className={cx('container')}>
					<SocialIcon />
				</div>
			) : (
				<div className={cx('container')}></div>
			)}
		</>
	);
}

export default Footer;
