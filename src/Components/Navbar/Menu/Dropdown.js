import React from 'react';

const Dropdown = ({ children, title }) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">{title}</span>
            <div className="navbar-dropdown">{children}</div>
        </div>
    );
};

// REQUIRED PROPS: to (string), children (???), title (string)

export default Dropdown;
