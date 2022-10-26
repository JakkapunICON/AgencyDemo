// material-ui
import { Box, AppBar, Toolbar, colors } from '@mui/material';

import ResponsiveMode from './ResponsiveMode';

export default function HeaderResponsiveMode() {
    return (
        <AppBar component="nav" sx={{ backgroundColor: 'gray', color: '#FFFFFF', boxShadow: 0, pr: 0.5 }}>
            <Toolbar variant="dense">
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ResponsiveMode />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
