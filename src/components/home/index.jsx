import React from 'react';
import HomeDesktop from './homeDesktop';
import HomeMobile from './homeMobile';

function HomeComponent({ mobile }) {
    return <>{!mobile ? <HomeDesktop /> : <HomeMobile />}</>;
}

export default HomeComponent;
