import { useContext } from 'react';
import { ModalContext } from '~/layouts/DefaultLayout/DefaultLayout';

import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
function Modal() {
	const { handleCloseModal, getLink } = useContext(ModalContext);

	const handleOpenLink = (e) => {
		window.open(getLink, '_blank');
	};

	return (
		<div className={cx('wrapper-modal')} onClick={handleCloseModal}>
			<section className={cx('modal')}>
				<div className={cx('modal-content')}>
					<p>Do you want to open newtab?</p>
					<button onClick={handleCloseModal} className={cx('btn-cancel')}>
						Cancel
					</button>

					<button className={cx('btn-accept')} onClick={handleOpenLink}>
						Accept
					</button>
				</div>
			</section>
		</div>
	);
}

export default Modal;
