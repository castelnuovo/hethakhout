import React from 'react';
import PropTypes from 'prop-types';

const MenuMega = ({ title, children }) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable is-mega">
            <div className="navbar-link">{title}</div>
            <div className="navbar-dropdown">
                <div className="container is-fluid">
                    <div className="columns">{children}</div>
                </div>
            </div>
        </div>
    );
};

MenuMega.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default MenuMega;
