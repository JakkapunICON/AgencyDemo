// project import
import MainLayout from '../Layouts/MainLayout';
import { MAIN_ROUTER } from '../data/router-list';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: MAIN_ROUTER
};

export default MainRoutes;
