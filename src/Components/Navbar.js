import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper green darken-2">
                <div className="container">
                    <a href="/" className="brand-logo">
                        Het Hak Hout
                    </a>
                    <ul className="right">
                        <li>
                            <NavLink activeClassName="active" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
