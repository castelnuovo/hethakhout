import React from 'react';
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

// REQUIRED PROPS: to (string), children (???)

export default MenuBtn;
