import React from 'react';
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

// REQUIRED PROPS: hamburgerOpen (function), hamburgerOpen (boolean)

export default BrandHamburger;
