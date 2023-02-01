import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './ParticlesRender.module.scss';

const cx = classNames.bind(styles);
function ParticlesRender() {
	const init = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const options = {
		detectRetina: true,
		detectsOn: 'canvas',
		interactivity: {
			detectsOn: 'parent',
			event: {
				onHover: {
					enable: true,
					mode: 'connect',
				},
			},
			modes: {
				connect: {},
			},
		},

		particles: {
			bounce: {
				horizontal: {
					random: {
						enable: true,
						minimumValue: 0.1,
					},
					value: 0.1,
				},
				vertical: {
					random: {
						enable: true,
						minimumValue: 0.1,
					},
					value: 0.1,
				},
			},
			number: { value: 120 },
			color: {
				value: ['#03dac6', '#ff0266', '#000000'],
			},

			move: {
				enable: true,
				speed: 2,
				random: true,
				outMode: 'ease-out-quad',
			},
			links: {
				color: { value: 'random' },
				distance: 150,
				enable: true,
				width: 1,
			},
			size: {
				value: 2,
				random: true,
			},
		},
	};

	return <Particles options={options} init={init} className={cx('canvas')} />;
}

export default ParticlesRender;
