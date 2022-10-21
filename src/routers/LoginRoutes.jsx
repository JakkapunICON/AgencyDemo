// project import
import AuthLayout from '../Layouts/AuthLayout';
import { AUTH_ROUTER } from '../data/router-list';

const LoginRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: AUTH_ROUTER
};

export default LoginRoutes;
