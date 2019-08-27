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

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    hasActiveState: PropTypes.bool.isRequired
};

MenuLink.defaultProps = {
    className: 'navbar-item',
    hasActiveState: true
};

export default MenuLink;
