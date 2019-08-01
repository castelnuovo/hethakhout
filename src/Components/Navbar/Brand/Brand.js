import React from 'react';
import BrandLogo from './BrandLogo';
import BrandHamburger from './BrandHamburger';

const Brand = ({
    styles,
    scrolledPastBreakpoint,
    hamburgerClick,
    hamburgerOpen
}) => {
    return (
        <div className="navbar-brand">
            <BrandLogo
                scrolledPastBreakpoint={scrolledPastBreakpoint}
                styles={styles}
            />
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={hamburgerClick}
            />
        </div>
    );
};

// REQUIRED PROPS: styles (css module), scrolledPastBreakpoint (boolean), hamburgerOpen (function), hamburgerOpen (boolean)

export default Brand;
