import React from 'react';
import classNames from 'classnames';
import logo from '../../Assets/images/logo_green_withouw_brand.png';

const HeroImage = props => {
    let classes = classNames('image', props.styles.image);

    return (
        <figure className="center">
            <img src={logo} className={classes} alt="Logo" />
        </figure>
    );
};

export default HeroImage;
