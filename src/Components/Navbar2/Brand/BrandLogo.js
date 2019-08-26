import React from 'react';
import Link from '../Menu/MenuLink';
import logo from '../../../Assets/images/logo_green_withouw_brand.png';

const BrandLogo = ({ styles }) => {
    return (
        <Link to="/" hasActiveState={false}>
            <img src={logo} className={styles.image} alt="Logo" />
        </Link>
    );
};

// REQUIRED PROPS: styles (css module),

export default BrandLogo;
