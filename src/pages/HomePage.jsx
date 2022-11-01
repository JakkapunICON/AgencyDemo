import { useTheme, useMediaQuery } from '@mui/material';
import HomeComponent from '../components/home';

function HomePage() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return <HomeComponent mobile={matchesMobile} />;
}

export default HomePage;
