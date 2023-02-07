import config from '~/config';
//Layouts
// import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Work from '~/pages/Work';
import Me from '~/pages/Me';
import Contact from '~/pages/Contact';

//Public routes
const publicRoutes = [
	{ path: config.routes.home, name: Home, component: Home },
	{ path: config.routes.work, name: Work, component: Work },
	{ path: config.routes.me, name: Me, component: Me },
	{ path: config.routes.contact, name: Contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
