import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Typography, AppBar, Toolbar, Button, CardMedia, useTheme } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

// custum style import
import { ButtonMenu, Search, SearchIconWrapper, StyledInputBase } from '../../../styles/Layouts/HeaderMenu';

// project import
import logoIconframework from '../../../images/logo/logoIconframework.png';
import { HEADER_MENU } from '../../../data/header-menu';

export default function HeaderMenu() {
    const theme = useTheme();
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
                    {HEADER_MENU.map((item) => (
                        <ButtonMenu variant="text" component={RouterLink} to={item.href} key={item.id}>
                            <Typography noWrap variant="text16">
                                {item.title}
                            </Typography>
                        </ButtonMenu>
                    ))}
                    <Button
                        variant="contained"
                        size="large"
                        color="success"
                        startIcon={<AddIcon sx={{ marginLeft: '-10px' }} />}
                        sx={{ borderRadius: '3px', marginLeft: '10px' }}
                    >
                        <Typography noWrap variant="text16">
                            เพิ่ม และนัดลูกค้าใหม่
                        </Typography>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
