import { AppBar, Toolbar, CardMedia } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styles/Layouts/HeaderMenu';
import { Search as SearchIcon } from '@mui/icons-material';

import notify from '../../../images/mobilemenu/notify.png';
import img from '../../../images/mobilemenu/img.png';

function HeaderMobileTop() {
    return (
        <AppBar
            component="nav"
            sx={{
                backgroundColor: 'linear-gradient(180deg, #0B1D26 0%, rgba(11, 29, 38, 0) 100%)',
                filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))',
                position: 'relative',
                boxShadow: 0,
                pr: 2
            }}
        >
            <Toolbar sx={{ minHeight: '65px' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="secondary" sx={{ fontSize: '36px' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="พิมพ์ชื่อโครงการ หรือทำเลที่ต้องการ" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <CardMedia component="img" image={notify} alt="notify" sx={{ width: 40, mr: 3 }} />
                <CardMedia component="img" image={img} alt="img" sx={{ width: 40 }} />
            </Toolbar>
        </AppBar>
    );
}

export default HeaderMobileTop;
