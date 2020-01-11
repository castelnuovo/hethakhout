import React, { useState, useRef, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import useClickOutside from 'Utils/useClickOutside';
import Brand from './Brand';
import Menu from './Menu';

const NavBarStyles = createGlobalStyle`
    .navbar-item.is-mega {
        position: static;

        .is-mega-menu-title {
            margin-bottom: 0;
            padding: 0.375rem 1rem;
        }
    }    

    @media screen and (max-width: 1023px) {
        .navbar-menu.is-active {
            padding-bottom: 5rem;
        }
    }
`;

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
            <NavBarStyles />
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
