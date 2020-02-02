import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BrandHamburger from './BrandHamburger';
import { Logo } from 'Config/Brand';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    return (
        <div className="navbar-brand">
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={toggleHamburger}
            />

            <Link to="/" className="navbar-item">
                <img src={Logo} alt="Logo || Het Hak Hout" />
            </Link>
        </div>
    );
};

Brand.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    toggleHamburger: PropTypes.func.isRequired
};

export default Brand;
