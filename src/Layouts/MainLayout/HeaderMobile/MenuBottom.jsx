import { Box, Toolbar, Typography, IconButton, AppBar, styled, Grid } from '@mui/material';
import { MenuBottomBar } from '../../../styles/Layouts/HeaderMobile';

// project import
import MenuBottomItem from './MenuBottomItem';

import setting from '../../../images/mobilemenu/setting.png';
import emarket from '../../../images/mobilemenu/emarket.png';
import appointment from '../../../images/mobilemenu/appointment.png';
import menu from '../../../images/mobilemenu/menu.png';

function MenuBottom() {
    return (
        <MenuBottomBar>
            <Grid container spacing={0}>
                <Grid item xs>
                    <MenuBottomItem src={setting} alt="setting" text="Setting" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={emarket} alt="emarket" text="E-Market" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={appointment} alt="appointment" text="นัดหมาย" />
                </Grid>
                <Grid item xs>
                    <MenuBottomItem src={menu} alt="menu" text="Menu" />
                </Grid>
            </Grid>
        </MenuBottomBar>
    );
}

export default MenuBottom;
