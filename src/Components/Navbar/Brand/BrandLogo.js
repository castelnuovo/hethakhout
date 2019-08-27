import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Menu/MenuLink';
import logo from 'Assets/images/logo_green_withouw_brand.png';

const BrandLogo = ({ styles }) => {
    return (
        <Link to="/" hasActiveState={false}>
            <img src={logo} className={styles.image} alt="Logo" />
        </Link>
    );
};

BrandLogo.propTypes = {
    styles: PropTypes.object.isRequired
};

export default BrandLogo;
