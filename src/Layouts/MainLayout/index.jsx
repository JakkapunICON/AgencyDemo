import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

// custom style import
import { ContainerLayout, HeaderStyle, MainContent } from '../../styles/Layouts/MainLayout';
import { ContainerLayoutMobile } from '../../styles/Layouts/MainLayoutMobile';

// project import
import Header from './Header';
import MenuBottom from '../MainLayout/HeaderMobile/MenuBottom';
import HeaderMobileTop from '../MainLayout/HeaderMobile/HeaderMobileTop';
import { useTheme, useMediaQuery } from '@mui/material';

import image1 from '../../images/content/image1.png';

// ==============================|| MAIN LAYOUT ||============================== //

function LayoutDesktopApp() {
    return (
        <>
            <ContainerLayout component="div" maxWidth="xl">
                <HeaderStyle component="header">
                    <Header />
                </HeaderStyle>
                <MainContent component="main">
                    <Outlet />
                </MainContent>
            </ContainerLayout>
        </>
    );
}

function LayoutMobileApp() {
    return (
        <>
            <ContainerLayoutMobile component="div" maxWidth="xl" src={image1}>
                {/* <HeaderStyle component="header">
                    <HeaderMobileTop />
                </HeaderStyle> */}
                {/* <MainContent component="main">
                    <Outlet />
                </MainContent> */}
                <MenuBottom />
            </ContainerLayoutMobile>
        </>
    );
}

export default function MainLayout() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return <>{!matchesMobile ? <LayoutDesktopApp /> : <LayoutMobileApp />}</>;
}
