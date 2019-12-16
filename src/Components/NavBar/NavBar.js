import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
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

    @include until($desktop) {
        .navbar-menu {
            display: block;
            opacity: 0;
    
            position: absolute;
            /* or float: left; width: 100%;*/
            left: 0;
            right: 0;
    
            transform: translateY(-50%);
            transition: all .4s ease-in-out;
            pointer-events: none;
        }
    
        .navbar-menu.is-active {
            opacity: 1;
            transform: none;
            pointer-events: auto;
        }
    }
`;

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <nav className="navbar is-fixed-top">
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
