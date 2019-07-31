import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, children, className, hasActiveState }) => {
    return (
        <NavLink
            exact
            to={to}
            className={className}
            activeClassName={hasActiveState ? 'is-active' : ''}
        >
            {children}
        </NavLink>
    );
};

Link.defaultProps = { className: 'navbar-item', hasActiveState: true };

// REQUIRED PROPS: to (string), children (???)
// OPTIONAL PROPS: className (string/className object)

export default Link;
