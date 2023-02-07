import classNames from 'classnames/bind';

import { Link } from 'react-scroll';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, offset = 10, activeClass, styles, className }) {
	return (
		<Link
			smooth={true}
			spy={true}
			className={cx('menu-item')}
			activeClass={activeClass}
			duration={1000}
			offset={offset}
			to={to}
			style={styles}
		>
			<span className={cx('title')}>{title}</span>
		</Link>
	);
}

export default MenuItem;
