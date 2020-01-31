import React, { useState, useRef, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router';
import useClickOutside from 'Utils/useClickOutside';
import Brand from './Brand';
import Menu from './Menu';

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    // User clicks outside hamburger nav
    const clickRef = useRef();
    useClickOutside(clickRef, () => hamburgerOpen && toggleHamburger());

    // User clicks on navlink
    let location = useLocation();
    useEffect(() => {
        setHamburgerOpen(false);
    }, [location.pathname]);

    return (
        <nav ref={clickRef} className="navbar is-fixed-top">
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

export default withRouter(NavBar);
