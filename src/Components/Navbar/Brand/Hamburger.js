import React from 'react';
import classNames from 'classnames';

const Hamburger = ({ hamburgerOpen, hamburgerClick }) => {
    let classes = {
        open: classNames('navbar-burger', 'burger', 'is-active'),
        close: classNames('navbar-burger', 'burger')
    };

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

export default Hamburger;
