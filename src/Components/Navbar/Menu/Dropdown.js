import React from 'react';
import Link from './Link';

const Dropdown = ({ to, children, title }) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <Link to={to} className="navbar-link">
                {title}
            </Link>

            <div className="navbar-dropdown">{children}</div>
        </div>
    );
};

// REQUIRED PROPS: to (string), children (???), title (string)

export default Dropdown;
