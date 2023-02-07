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
	// const particlesLoaded = useCallback(async (container) => {
	// 	await  console.log(container);
	// }, []);
	const options = {
		detectRetina: true,
		interactivity: {
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
			number: { value: 120 },
			color: {
				value: ['#03dac6', '#ff0266', '#000000'],
			},
			spawning: true,
			move: {
				enable: true,
				speed: 2,
				random: true,
			},
			links: {
				color: 'random',
				distance: 140,
				enable: true,
				width: 1,
			},
			size: {
				value: { min: 0.5, max: 2.5 },
			},
		},
		responsive: [
			{
				maxWidth: 1023,
				options: {
					particles: {
						number: { value: 90 },
						links: {
							enable: true,
							distance: 80,
							width: 0.7,
						},
					},
				},
			},
			{
				maxWidth: 767,
				options: {
					particles: {
						number: { value: 70 },
						links: { enable: false },
						move: {
							enable: true,
							speed: 1.75,
							random: true,
						},
					},
				},
			},
			{
				maxWidth: 374,
				options: {
					particles: {
						number: { value: 20 },
						links: { enable: false },
						move: {
							enable: true,
							speed: 1,
							random: true,
						},
					},
				},
			},
		],
	};

	return (
		<div id={cx('content-canvas')}>
			<Particles options={options} init={init} id={cx('canvas')} />
		</div>
	);
}

export default ParticlesRender;
