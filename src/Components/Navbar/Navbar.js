import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, NavLink, withRouter } from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss';
import Icon from '../Icon';
import NavbarBrand from './NavbarBrand';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolledPastBreakpoint: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;

        this.setState({
            scrolledPastBreakpoint: scrollTop > 25
        });
    };

    render() {
        let classesNavbar = classNames(
            'navbar',
            'is-fixed-top',
            NavbarStyles.navbar,
            { 'is-primary': !this.state.scrolledPastBreakpoint }
        );

        let classesBtn = classNames('button', 'is-primary', {
            'is-inverted': !this.state.scrolledPastBreakpoint,
            'is-outlined': this.state.scrolledPastBreakpoint
        });

        return (
            <nav className={classesNavbar}>
                <div className="container">
                    <NavbarBrand
                        styles={NavbarStyles}
                        scrolledPastBreakpoint={
                            this.props.scrolledPastBreakpoint
                        }
                    />
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link exact className="navbar-item" to="/">
                                Home
                            </Link>
                            <NavLink className="navbar-item" to="/blog">
                                Blog
                            </NavLink>
                            <NavLink className="navbar-item" to="/foto">
                                Foto's
                            </NavLink>
                            <span className="navbar-item">
                                <NavLink className={classesBtn} to="/walk">
                                    <Icon type="fas" icon="walking" />
                                    <span>Boek een Wandeling</span>
                                </NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
