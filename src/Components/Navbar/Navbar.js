import React, { useState } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import NavbarStyles from './Navbar.module.scss';
import Brand from './Brand';
import Menu from './Menu';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <nav
            className={classNames(
                'navbar',
                'is-fixed-top',
                NavbarStyles.navbar
            )}
        >
            <div className="container">
                <Brand
                    hamburgerOpen={hamburgerOpen}
                    toggleHamburger={toggleHamburger}
                />
                <Menu hamburgerOpen={hamburgerOpen} />
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
