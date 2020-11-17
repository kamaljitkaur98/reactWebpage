import React from 'react';
import { homeObjTwo } from './Data';
import HeroSection from '../../HeroSection';
function Products() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
        </>
    );
}

export default Products