import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ to, children, className, hasActiveState }) => {
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

MenuLink.defaultProps = { className: 'navbar-item', hasActiveState: true };

// OPTIONAL PROPS: className (string/className object)
MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    // className: PropTypes.string
    hasActiveState: PropTypes.bool
};

export default MenuLink;
