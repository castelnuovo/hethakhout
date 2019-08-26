import React, { useState } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import NavbarStyles from './Navbar.module.scss';
import Brand from './Brand';
import Menu from './Menu';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <nav
            className={classNames(
                'navbar',
                'is-fixed-top',
                NavbarStyles.navbar
            )}
        >
            <div className="container">
                <Brand />
                <Menu
                    hamburgerOpen={hamburgerOpen}
                    setHamburgerOpen={setHamburgerOpen}
                />
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
