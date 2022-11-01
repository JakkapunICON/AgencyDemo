// material-ui
import { styled, Container, Box } from '@mui/material';

export const ContainerLayout = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.main
}));

export const HeaderStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}));

export const MainContent = styled(Box)(({ theme, src }) => ({
    display: 'flex',
    flexDirection: 'column'
}));
