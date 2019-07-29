import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../Icon';

const NavbarMenu = ({ styles, scrolledPastBreakpoint }) => {
    let classes = classNames('button', 'is-primary', {
        'is-inverted': !scrolledPastBreakpoint,
        'is-outlined': scrolledPastBreakpoint
    });

    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <Link exact className="navbar-item" to="/">
                    Home
                </Link>
                <NavLink
                    className="navbar-item"
                    to="/blog"
                    activeClassName="is-active"
                >
                    Blog
                </NavLink>
                <NavLink
                    className="navbar-item"
                    to="/foto"
                    activeClassName="is-active"
                >
                    Foto's
                </NavLink>
                <span className="navbar-item">
                    <NavLink className={classes} to="/walk">
                        <Icon type="fas" icon="walking" />
                        <span>Boek een Wandeling</span>
                    </NavLink>
                </span>
            </div>
        </div>
    );
};

export default NavbarMenu;
