import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

// custom style import
import { ContainerLayout, HeaderStyle, MainContent } from '../../styles/Layouts/MainLayout';

// project import
import Header from './Header';
// import { ResponsiveContext } from '../../main';
import { useTheme } from '@mui/material';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
    // const { radioResponsiveModeState } = useContext(ResponsiveContext);

    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down(radioResponsiveModeState));

    return (
        <ContainerLayout component="div" maxWidth="xl">
            <HeaderStyle component="header">
                <Header />
            </HeaderStyle>
            <MainContent component="main">
                <Outlet />
            </MainContent>
        </ContainerLayout>
    );
}
