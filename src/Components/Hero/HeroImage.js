import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from 'Config/Logo';

const HeroImage = ({ styles }) => {
    return (
        <figure className="center">
            <img
                src={Logo}
                className={classNames('image', styles.image)}
                alt="Logo"
            />
        </figure>
    );
};

HeroImage.propTypes = {
    styles: PropTypes.object.isRequired
};

export default HeroImage;
