// material-ui
import { styled, Container, Box } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export const ContainerLayout = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('lg')]: {
        backgroundColor: lightBlue[100]
    },
    [theme.breakpoints.down('md')]: {
        backgroundColor: lightBlue[300]
    },
    [theme.breakpoints.down('sm')]: {
        backgroundColor: lightBlue[600]
    },
    [theme.breakpoints.down('xs')]: {
        backgroundColor: lightBlue[900]
    }
}));

export const HeaderStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
    // height: 127
}));

export const MainContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column'
}));
