import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);
function Grid({ children }) {
	const content = cx('content');

	return (
		<>
			<div className={cx('container')}>
				<div className={content}>{children}</div>
			</div>
		</>
	);
}

export default Grid;
