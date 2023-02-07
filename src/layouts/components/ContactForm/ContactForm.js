import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames/bind';
import {
	faLocationPin,
	faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import styles from './ContactForm.module.scss';

const cx = classNames.bind(styles);

function ContactForm() {
	const phoneNum = 123456789;
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_rngskbn',
				'template_yzn3m7m',
				form.current,
				'iQm7miKEOyRQvyee_'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div>
			<h1 className={cx('section-heading title-container')}>Contact</h1>
			<div className={cx('container')}>
				<div>
					<span>Thank you!</span>
				</div>
				<section className={cx('contact-content')}>
					<form ref={form} onSubmit={sendEmail} className={cx('form-control')}>
						<input
							type="text"
							placeholder="Full Name"
							name="user_name"
							required
							className={cx('input')}
						/>
						<input
							type="email"
							placeholder="Email"
							name="user_email"
							className={cx('input')}
							required
						/>
						<input
							type="text"
							placeholder="Subject"
							name="subject"
							required
							className={cx('input')}
						/>
						<textarea
							name="message"
							placeholder="Message"
							required
							className={cx('input-area')}
						></textarea>
						<button type="submit" className={cx('btn')}>
							Send Message
						</button>
					</form>

					<div className={cx('contact-info')}>
						<p>My Contact:</p>
						<p>
							<FontAwesomeIcon className={cx('icon')} icon={faLocationPin} />
							Nam Dinh, Viet Nam
						</p>
						<p>
							<FontAwesomeIcon
								className={cx('icon')}
								icon={faMobileScreenButton}
							/>
							Phone:&nbsp;
							{phoneNum}
						</p>
						<span>
							<FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
							<p>
								Email:&nbsp;
								<a href="mailto:ninhdavid96@gmail.com">ninhdavid96@gmail.com</a>
							</p>
						</span>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ContactForm;
