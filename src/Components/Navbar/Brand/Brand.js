import React from 'react';
import BrandLogo from './BrandLogo';
import BrandHamburger from './BrandHamburger';
import BrandStyles from './Brand.module.scss';

const Brand = ({ hamburgerClick, hamburgerOpen }) => {
    return (
        <div className="navbar-brand">
            <BrandLogo styles={BrandStyles} />
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={hamburgerClick}
            />
        </div>
    );
};

// REQUIRED PROPS: styles (css module), scrolledPastBreakpoint (boolean), hamburgerOpen (function), hamburgerOpen (boolean)

export default Brand;
