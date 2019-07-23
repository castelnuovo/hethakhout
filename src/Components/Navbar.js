import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="right">
                    <li>
                        <Link to="/" exact>
                            Home
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Navbar);
