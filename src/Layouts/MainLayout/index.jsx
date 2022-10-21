import { Outlet } from 'react-router-dom';

// custom style import
import { ContainerLayout, HeaderStyle, MainContent } from '../../styles/Layouts/MainLayout';

// project import
import Header from './Header';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
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
