import { createBrowserRouter } from 'react-router-dom';

import publicRoutes from './publicRoutes';
import protectedRoutes from './protectedRoutes';

const router = createBrowserRouter([publicRoutes, protectedRoutes]);

export default router;
