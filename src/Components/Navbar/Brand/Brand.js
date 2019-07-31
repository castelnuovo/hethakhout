import React from 'react';
import Logo from './Logo';
import Hamburger from './Hamburger';

const Brand = ({
    styles,
    scrolledPastBreakpoint,
    hamburgerClick,
    hamburgerOpen
}) => {
    return (
        <div className="navbar-brand">
            <Logo
                scrolledPastBreakpoint={scrolledPastBreakpoint}
                styles={styles}
            />
            <Hamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={hamburgerClick}
            />
        </div>
    );
};

// REQUIRED PROPS: styles (css module), scrolledPastBreakpoint (boolean), hamburgerOpen (function), hamburgerOpen (boolean)

export default Brand;
