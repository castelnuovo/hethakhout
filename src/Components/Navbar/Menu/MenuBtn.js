import React from 'react';
import classNames from 'classnames';
import MenuLink from './MenuLink';

const MenuBtn = ({ to, children, scrolledPastBreakpoint }) => {
    return (
        <span className="navbar-item">
            <MenuLink
                to={to}
                className={classNames('button', 'is-primary', {
                    'is-inverted': !scrolledPastBreakpoint,
                    'is-outlined': scrolledPastBreakpoint
                })}
            >
                {children}
            </MenuLink>
        </span>
    );
};

// REQUIRED PROPS: to (string), children (???), scrolledPastBreakpoint (boolean)

export default MenuBtn;
