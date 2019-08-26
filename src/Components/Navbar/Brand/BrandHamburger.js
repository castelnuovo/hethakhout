import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BrandHamburger = ({ hamburgerOpen, hamburgerClick }) => {
    const classes = {
        open: classNames('navbar-burger', 'burger', 'is-active'),
        close: classNames('navbar-burger', 'burger')
    };

    // TODO: find way to use - in object key
    // let classes = classNames('navbar-burger', 'burger', {
    //     is-active: hamburgerOpen
    // });

    return (
        <span
            className={hamburgerOpen ? classes.open : classes.close}
            onClick={hamburgerClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </span>
    );
};

BrandHamburger.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    hamburgerClick: PropTypes.func.isRequired
};

export default BrandHamburger;
