import React from 'react';
import PropTypes from 'prop-types';

const MenuColumn = ({ title, children }) => {
    return (
        <div className="column">
            <h1 className="title is-6 is-mega-menu-title">{title}</h1>
            {children}
        </div>
    );
};

MenuColumn.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
export default MenuColumn;
