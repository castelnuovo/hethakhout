import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from './MenuLink';

const MenuBtn = ({ to, children }) => {
    return (
        <span className="navbar-item">
            <MenuLink to={to} className={'button is-primary is-outlined'}>
                {children}
            </MenuLink>
        </span>
    );
};

MenuBtn.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default MenuBtn;
