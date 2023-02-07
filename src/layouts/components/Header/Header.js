import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Description from './Description';
import ParticlesRender from '~/components/Particles/ParticlesRender';

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('inner')}>
				<section className={cx('section')}>
					<h1 className={cx('text-top hover')}>Hi</h1>
					<h1 className={cx('text-top hover')}>I'm Ninh,</h1>
					<h3 className={cx('spanParent loader')}>
						<Description />
					</h3>
				</section>
				<ParticlesRender />
			</div>
		</div>
	);
}

export default Header;
