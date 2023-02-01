import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Description() {
	const textArray = 'Become a Web Developer ';

	const textResult = textArray.split('').map((result, index) => {
		return (
			<span key={index} className={cx('m')}>
				{result}
			</span>
		);
	});

	return <>{textResult}</>;
}

export default Description;
