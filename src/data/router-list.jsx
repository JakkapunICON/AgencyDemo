import { Navigate } from 'react-router-dom';

// project import
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const MAIN_ROUTER = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/home',
        element: <Navigate to="/" />
    },
    {
        id: 1,
        path: '/contact',
        element: <ContactPage />
    }
];

export const AUTH_ROUTER = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
];
