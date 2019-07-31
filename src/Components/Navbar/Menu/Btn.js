import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Btn = ({ to, children, scrolledPastBreakpoint }) => {
    let classes = classNames('button', 'is-primary', {
        'is-inverted': !scrolledPastBreakpoint,
        'is-outlined': scrolledPastBreakpoint
    });

    return (
        <span className="navbar-item">
            <Link to={to} className={classes}>
                {children}
            </Link>
        </span>
    );
};

// REQUIRED PROPS: to (string), children (???), scrolledPastBreakpoint (boolean)

export default Btn;
