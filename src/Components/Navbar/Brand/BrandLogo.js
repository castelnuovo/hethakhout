import React from 'react';
import classNames from 'classnames';
import Link from '../Menu/MenuLink';
import logo from '../../../Assets/images/logo_green_withouw_brand.png';

const BrandLogo = ({ scrolledPastBreakpoint, styles }) => {
    let classes = {
        true: classNames(styles.image),
        false: classNames(styles.image, styles.hidden)
    };

    return (
        <Link to="/" hasActiveState={false}>
            <img
                src={logo}
                className={
                    scrolledPastBreakpoint ? classes.true : classes.false
                }
                alt="Logo"
            />
        </Link>
    );
};

// REQUIRED PROPS: styles (css module), scrolledPastBreakpoint (boolean)

export default BrandLogo;
