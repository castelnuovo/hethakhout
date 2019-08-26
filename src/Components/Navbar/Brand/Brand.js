import React from 'react';
import BrandLogo from './BrandLogo';
import BrandHamburger from './BrandHamburger';
import BrandStyles from './Brand.module.scss';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    return (
        <div className="navbar-brand">
            <BrandLogo styles={BrandStyles} />
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={toggleHamburger}
            />
        </div>
    );
};

// REQUIRED PROPS: styles (css module), scrolledPastBreakpoint (boolean), hamburgerOpen (function), hamburgerOpen (boolean)

export default Brand;
