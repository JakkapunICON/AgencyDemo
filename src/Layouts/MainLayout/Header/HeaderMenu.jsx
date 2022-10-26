import { Link as RouterLink, useLocation } from 'react-router-dom';

// material-ui
import { Box, Typography, AppBar, Toolbar, Button, CardMedia, useTheme, useMediaQuery, Grid } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

// custum style import
import { ButtonMenu, Search, SearchIconWrapper, StyledInputBase } from '../../../styles/Layouts/HeaderMenu';

// project import
import logoIconframework from '../../../images/logo/logoIconframework.png';
// import { HEADER_MENU } from '../../../data/header-menu';
import { useState, useEffect } from 'react';
import MiniMenu from './MiniMenu';
import SmallMenu from './SmallMenu';

import { DataServices } from '../../../services/DataServices';

export default function HeaderMenu() {
    const location = useLocation();
    const theme = useTheme();

    const matches1430 = useMediaQuery('(max-width:1430px)');
    const matches1360 = useMediaQuery('(max-width:1360px)');
    const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const matches1100 = useMediaQuery('(max-width:1100px)');
    const matches1014 = useMediaQuery('(max-width:1014px)');
    const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const menuItem = DataServices.menu();
    const menuItem1430 = DataServices.menu().slice(0, 4);
    const menuItem1360 = DataServices.menu().slice(0, 3);
    const menuItemDownLg = DataServices.menu().slice(0, 2);
    const menuItem1100 = DataServices.menu().slice(0, 1);
    // const menuItem1014 = DataServices.menu().slice(0, 0);

    const [items, setItems] = useState(menuItem);

    useEffect(() => {
        if (matches1430) {
            setItems(menuItem1430);
        }
        if (matches1360) {
            setItems(menuItem1360);
        }
        if (matchesDownLg) {
            setItems(menuItemDownLg);
        }
        if (matches1100) {
            setItems(menuItem1100);
        }

        if (!matches1430 && !matches1360 && !matchesDownLg && !matches1100) {
            setItems(menuItem);
        }
    }, [
        location.pathname,
        matches1430,
        matches1360,
        matchesDownLg,
        matches1100
        // matches1014
    ]);

    return (
        <AppBar component="nav" sx={{ boxShadow: 0, pr: 2, pl: 4 }}>
            <Toolbar variant="dense">
                <CardMedia component="img" image={logoIconframework} alt="iconframework" sx={{ width: 'auto' }} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {matchesDownMd ? (
                        <>
                            <SmallMenu />
                        </>
                    ) : (
                        <>
                            {items.map((item) => (
                                <ButtonMenu
                                    variant="text16"
                                    active={location.pathname === item.href ? 'true' : 'false'}
                                    component={RouterLink}
                                    to={item.href}
                                    key={item.id}
                                    // sx={{ flexWrap: 'nowrap' }}
                                >
                                    {/* {item.title} */}
                                    <Typography variant="text16" noWrap>
                                        {item.title}
                                    </Typography>
                                </ButtonMenu>
                            ))}
                            {matches1430 ? <MiniMenu /> : <></>}
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                                startIcon={<AddIcon sx={{ marginLeft: '-10px' }} />}
                                sx={{ borderRadius: '3px', marginLeft: '10px' }}
                            >
                                <Typography noWrap variant="text16">
                                    {matches1014 ? 'เพิ่ม และนัด...' : 'เพิ่ม และนัดลูกค้าใหม่'}
                                </Typography>
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
