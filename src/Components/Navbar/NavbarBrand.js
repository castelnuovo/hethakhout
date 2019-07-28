import React from 'react';
import classNames from 'classnames';
import logo from '../../Assets/images/logo_green_withouw_brand.png';

const NavbarBrand = props => {
    let classesTrue = classNames(props.styles.image);
    let classesFalse = classNames(props.styles.image, props.styles.hidden);

    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img
                    src={logo}
                    className={
                        !props.scrolledPastBreakpoint
                            ? classesTrue
                            : classesFalse
                    }
                    alt="Logo"
                />
            </a>
            <span className="navbar-burger burger" data-target="navbar"></span>
        </div>
    );
};

export default NavbarBrand;
