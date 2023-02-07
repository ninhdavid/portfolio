import React, { useContext, useRef } from 'react';
import { ModalContext } from '~/layouts/DefaultLayout/DefaultLayout';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ProductMenu.module.scss';
import LoadImage from '~/components/Image/LoadImage';

const cx = classNames.bind(styles);

function ProductItem({ props }) {
	const { handleOpenModal } = useContext(ModalContext);
	const ref = useRef();
	return (
		<>
			<div className={cx('product-item')}>
				<div className={cx('image-content')}>
					<LoadImage
						src={props.src}
						alt={props.alt}
						className={cx('image')}
						ref={ref}
					/>
				</div>
				<Button
					href={props.ref}
					target="_blank"
					className={cx('link-item')}
					onClick={handleOpenModal}
				>
					{props.link}
				</Button>
				<div className={cx('des-section')}>
					<span>{props.description}</span>
					<span>
						{props.tag}
						<a
							href={props.source}
							alt={props.source}
							target="_blank"
							rel="noreferrer"
						>
							{props.source}
						</a>
					</span>
				</div>
			</div>
		</>
	);
}

export default ProductItem;
