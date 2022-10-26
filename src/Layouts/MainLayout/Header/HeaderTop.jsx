// material-ui
import { Box, Typography, AppBar, Toolbar, IconButton, Button, ButtonGroup } from '@mui/material';
import { ToolbarStyle } from '../../../styles/Layouts/HeaderTop';
import {
    Notifications as NotificationsIcon,
    AccountCircle as AccountCircleIcon,
    Settings as SettingsIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import Language from './Language';

function HeaderTop() {
    return (
        <AppBar component="nav" sx={{ boxShadow: 0, pr: 0.5 }}>
            <ToolbarStyle variant="dense">
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="contained" size="small" color="primary">
                        <Typography variant="button">Agent</Typography>
                    </Button>
                    <IconButton size="large" aria-label="new account" color="secondary">
                        <AccountCircleIcon />
                    </IconButton>
                    <Typography noWrap variant="text14">
                        นายอสังหา...
                    </Typography>
                    <IconButton size="large" aria-label="new expand" color="secondary">
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="new notifications" color="secondary">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="setting of current user" color="secondary">
                        <SettingsIcon />
                    </IconButton>
                    <Language />
                </Box>
            </ToolbarStyle>
        </AppBar>
    );
}

export default HeaderTop;
