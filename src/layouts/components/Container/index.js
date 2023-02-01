import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);
function Test() {
	return (
		<div className={cx('content')}>
			<h2>Test</h2>
		</div>
	);
}

export default Test;
