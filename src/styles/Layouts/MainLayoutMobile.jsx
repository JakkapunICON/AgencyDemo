import { styled, Container, Box } from '@mui/material';

export const ContainerLayoutMobile = styled(Container)(({ theme, src }) => ({
    [theme.breakpoints.down('sm')]: {
        // display: 'block',
        // position: 'relative',
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top'
        // backgroundSize: 'contain',
        // maxHeight: 'auto',
        // maxWidth: 'auto',
        // height: 300,
        // width: 400
    }
}));
