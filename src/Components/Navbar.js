import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar is-fixed-top">
                <div class="navbar-brand">
                    <span class="navbar-item">Het Hak Hout</span>
                </div>

                <div id="NavbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <Link exact to="/" className="navbar-item">
                                Home
                            </Link>
                            <NavLink
                                to="/rondleidingen"
                                className="navbar-item"
                            >
                                Rondleidingen
                            </NavLink>
                            <NavLink to="/activiteiten" className="navbar-item">
                                Activiteiten
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
