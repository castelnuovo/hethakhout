import React from 'react';
import PropTypes from 'prop-types';
import BrandLogo from './BrandLogo';
import BrandHamburger from './BrandHamburger';
import BrandStyles from './Brand.module.scss';

const Brand = ({ hamburgerOpen, toggleHamburger }) => {
    return (
        <div className="navbar-brand">
            <BrandLogo styles={BrandStyles} />
            <BrandHamburger
                hamburgerOpen={hamburgerOpen}
                hamburgerClick={toggleHamburger}
            />
        </div>
    );
};

Brand.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    toggleHamburger: PropTypes.func.isRequired
};

export default Brand;
