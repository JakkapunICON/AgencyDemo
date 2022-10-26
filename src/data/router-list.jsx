import { Navigate } from 'react-router-dom';

// project import
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import PreownedPage from '../pages/Pre-ownedPage';
import RentPage from '../pages/RentPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

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
        path: '/pre-owned',
        element: <PreownedPage />
    },
    {
        path: '/rent',
        element: <RentPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
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
