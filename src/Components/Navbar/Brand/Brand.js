import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BrandHamburger from './BrandHamburger';
import logo from 'Assets/images/logo_green_withouw_brand.png';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    return (
        <div className="navbar-brand">
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={toggleHamburger}
            />

            <Link to="/" className="navbar-item">
                <img
                    src={logo}
                    alt="Bulma: a modern CSS framework based on Flexbox"
                />
            </Link>
        </div>
    );
};

Brand.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    toggleHamburger: PropTypes.func.isRequired
};

export default Brand;
