// material-ui
import { styled, Button, InputBase } from '@mui/material';

const bottomStyleAfter = (theme, active) => {
    return {
        content: '""',
        position: 'absolute',
        backgroundColor: theme.palette.secondary.main,
        height: '3px',
        borderRadius: '50px',
        width: active === 'true' ? '100%' : 0,
        left: 0,
        bottom: '-6px',
        transition: '0.25s'
    };
};

export const ButtonMenu = styled(Button)(({ theme, active }) => ({
    position: 'relative',
    color: theme.palette.primary.main,
    padding: theme.spacing(0, 1.1),
    // padding: '0 10px',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '26px',
    margin: theme.spacing(0, 0.9),
    '&:after': {
        ...bottomStyleAfter(theme, active)
    },
    '&:hover:after': {
        width: '100%'
    },
    '&:hover': {
        backgroundColor: 'unset'
    }
}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.white.main,
    marginRight: theme.spacing(3),
    border: '1.5px solid #E0E0E0',
    marginLeft: theme.spacing(3),
    width: '40%',
    [theme.breakpoints.down('lg')]: {
        width: '438px'
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2, 0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('lg')]: {
        width: '438px'
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        marginRight: '50px',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        height: '28px',
        // width: `calc(400px + 1000px)`,
        color: '#9E9E9E',
        fontSize: '16px',
        lineHeight: '22px'

        // [theme.breakpoints.up('md')]: {
        //     width: '55ch',
        //     height: '32px'
        // }
    }
}));
