import React from 'react';
import classNames from 'classnames';
import MenuLink from './MenuLink';

const MenuBtn = ({ to, children, scrolledPastBreakpoint }) => {
    const classes = classNames('button', 'is-primary', {
        'is-inverted': !scrolledPastBreakpoint,
        'is-outlined': scrolledPastBreakpoint
    });

    return (
        <span className="navbar-item">
            <MenuLink to={to} className={classes}>
                {children}
            </MenuLink>
        </span>
    );
};

// REQUIRED PROPS: to (string), children (???), scrolledPastBreakpoint (boolean)

export default MenuBtn;
