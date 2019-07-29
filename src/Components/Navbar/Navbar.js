import React, { Component } from 'react';
import classNames from 'classnames';
import NavbarStyles from './Navbar.module.scss';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

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
        let classes = classNames(
            'navbar',
            'is-fixed-top',
            NavbarStyles.navbar,
            {
                'is-primary': !this.state.scrolledPastBreakpoint
            }
        );

        return (
            <nav className={classes}>
                <div className="container">
                    <NavbarBrand
                        styles={NavbarStyles}
                        scrolledPastBreakpoint={
                            this.state.scrolledPastBreakpoint
                        }
                    />
                    <NavbarMenu
                        styles={NavbarStyles}
                        scrolledPastBreakpoint={
                            this.state.scrolledPastBreakpoint
                        }
                    />
                </div>
            </nav>
        );
    }
}

export default Navbar;
