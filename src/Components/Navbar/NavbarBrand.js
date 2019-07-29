import React from 'react';
import classNames from 'classnames';
import logo from '../../Assets/images/logo_green_withouw_brand.png';

const NavbarBrand = ({ styles, scrolledPastBreakpoint }) => {
    let classes = {
        true: classNames(styles.image),
        false: classNames(styles.image, styles.hidden)
    };

    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img
                    src={logo}
                    className={
                        scrolledPastBreakpoint ? classes.true : classes.false
                    }
                    alt="Logo"
                />
            </a>
            <span className="navbar-burger burger" data-target="navbar"></span>
        </div>
    );
};

export default NavbarBrand;
