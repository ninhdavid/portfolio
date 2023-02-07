import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SocialIcon.module.scss';

import { AiFillGithub, AiFillFacebook } from 'react-icons/ai';
const cx = classNames.bind(styles);

function SocialIcon() {
	return (
		<>
			<div className={cx('social-menu')}>
				<Button
					href="https://github.com/ninhdavid"
					target="_blank"
					className={cx('social-btn')}
				>
					<AiFillGithub />
				</Button>
				<Button
					href="https://www.facebook.com/ninhdavid96/"
					target="_blank"
					className={cx('social-btn')}
				>
					<AiFillFacebook />
				</Button>
			</div>
		</>
	);
}

export default SocialIcon;
