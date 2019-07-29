import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ title, to, children }) => {
    return (
        <div class="navbar-item has-dropdown is-hoverable">
            <NavLink class="navbar-link" to={to}>
                {title}
            </NavLink>

            <div class="navbar-dropdown">{children}</div>
        </div>
    );
};

export default Dropdown;
