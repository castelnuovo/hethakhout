import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import NavbarStyles from './Navbar.module.scss';
import Brand from './Brand';
import Menu from './Menu';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePage: false,
            hamburgerOpen: false,
            scrolledPastBreakpoint: true
        };
    }

    componentDidMount() {
        // Update navbar on scroll
        window.addEventListener('scroll', this.handleScroll);

        // Handle route change
        this.unlisten = this.props.history.listen(location => {
            this.handleRouteChange(location);
        });

        // Check initial route
        this.handleRouteChange(this.props.location);

        // Prevent scrolling if hamburgermenu open
        if (this.state.hamburgerOpen) {
            document.body.style.overflow = 'hidden';
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.unlisten();

        // Enable scrolling
        document.body.style.overflow = 'unset';
    }

    handleRouteChange(location) {
        this.setState({
            homePage: location.pathname === '/',
            scrolledPastBreakpoint: location.pathname !== '/',
            hamburgerPrevState: location.pathname !== '/'
        });
    }

    handleScroll = () => {
        const { homePage } = this.state;
        const scrollPosition = document.documentElement.scrollTop;

        if (!homePage) {
            return;
        }

        this.setState({
            scrolledPastBreakpoint: scrollPosition > 25
        });
    };

    toggleHamburger = () => {
        const {
            hamburgerOpen,
            hamburgerPrevState,
            scrolledPastBreakpoint
        } = this.state;

        if (hamburgerOpen) {
            this.setState({
                hamburgerOpen: !hamburgerOpen,
                hamburgerPrevState: scrolledPastBreakpoint,
                scrolledPastBreakpoint: hamburgerPrevState
            });
        } else {
            this.setState({
                hamburgerOpen: !hamburgerOpen,
                hamburgerPrevState: scrolledPastBreakpoint,
                scrolledPastBreakpoint: !hamburgerOpen
            });
        }
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
                    <Brand
                        styles={NavbarStyles}
                        scrolledPastBreakpoint={
                            this.state.scrolledPastBreakpoint
                        }
                        hamburgerClick={this.toggleHamburger}
                        hamburgerOpen={this.state.hamburgerOpen}
                    />
                    <Menu
                        scrolledPastBreakpoint={
                            this.state.scrolledPastBreakpoint
                        }
                        hamburgerOpen={this.state.hamburgerOpen}
                    />
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
