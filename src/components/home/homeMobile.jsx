import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import CardTitle from './CardTitle';

import image2 from '../../images/content/image2.png';

function HomeMobile() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        // // <section
        // // component="section"
        // >
        //     {/* <img src={image2} alt="" width={matchesMobile ? '100%' : '640px'} style={{ opacity: '0.1' }} /> */}
        // // </section>
        // // <section>Mobile</section>
        <></>
    );
}

export default HomeMobile;
