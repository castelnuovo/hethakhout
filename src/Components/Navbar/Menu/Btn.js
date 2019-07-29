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
            <Link className={classes} to={to}>
                {children}
            </Link>
        </span>
    );
};

export default Btn;
