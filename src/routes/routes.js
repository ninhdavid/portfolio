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
	{ path: config.routes.home, component: Home },
	{ path: config.routes.work, component: Work },
	{ path: config.routes.me, component: Me },
	{ path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
