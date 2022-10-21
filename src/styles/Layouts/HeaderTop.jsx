import { styled, Toolbar } from '@mui/material';

export const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        minHieght: '57px'
    }
}));
