import React from 'react';
import PropTypes from 'prop-types';

const MenuDropdown = ({ children, title }) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">{title}</span>
            <div className="navbar-dropdown">{children}</div>
        </div>
    );
};

MenuDropdown.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
};
export default MenuDropdown;
