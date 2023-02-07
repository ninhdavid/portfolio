import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Sidebar from './layouts/components/Sidebar';
import ContactForm from './layouts/components/ContactForm';
import Header from './layouts/components/Header';

function App() {
	return (
		<div>
			<div className="App">
				<DefaultLayout />
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes> */}
			</div>
		</div>
	);
}

export default App;
