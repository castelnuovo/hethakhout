import React from 'react';
import classNames from 'classnames';
import logo from '../../Assets/images/logo_green_withouw_brand.png';

const HeroImage = ({ styles }) => {
    const classes = classNames('image', styles.image);

    return (
        <figure className="center">
            <img src={logo} className={classes} alt="Logo" />
        </figure>
    );
};

// REQUIRED PROPS: styles (css module)

export default HeroImage;
