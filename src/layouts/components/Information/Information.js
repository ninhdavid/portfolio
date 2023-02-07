import classNames from 'classnames/bind';
import styles from './Information.module.scss';

const cx = classNames.bind(styles);
function Information() {
	return <div className={cx('content')}>what is this</div>;
}

export default Information;
