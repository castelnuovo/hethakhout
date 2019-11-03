import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Brand from './Brand';
import Menu from './Menu';

/**

.navbar-item.is-mega {
    position: static;

    .is-mega-menu-title {
        margin-bottom: 0;
        padding: 0.375rem 1rem;
    }
}
 */

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <nav className="navbar is-fixed-top">
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
