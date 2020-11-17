import React from 'react';
import { homeObjOne } from './Data';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';

function Services() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    );
}

export default Services;