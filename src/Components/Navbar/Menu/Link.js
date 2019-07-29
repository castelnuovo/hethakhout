import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, title }) => {
    return (
        <NavLink
            exact
            className="navbar-item"
            to={to}
            activeClassName="is-active"
        >
            {title}
        </NavLink>
    );
};

export default Link;
