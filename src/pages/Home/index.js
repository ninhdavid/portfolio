// const { default: Header } = require('~/layouts/components/Header');

import React from 'react';
import Header from '~/layouts/components/Header';

function Home() {
	return (
		<>
			<div id="/">
				<Header />
			</div>
		</>
	);
}

export default Home;
