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
        this.unlisten = this.props.history.listen(location => {
            this.handleRouteChange(location);
        });

        this.handleRouteChange(this.props.location);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.unlisten();
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleRouteChange(location) {
        const { hamburgerOpen } = this.state;

        if (!hamburgerOpen) {
            this.setState({
                scrolledPastBreakpoint: location.pathname !== '/'
            });
        }

        this.setState({
            homePage: location.pathname === '/'
        });
    }

    handleScroll = () => {
        const { homePage, hamburgerOpen } = this.state;
        const scrollPosition = document.documentElement.scrollTop;
        const breakpoint = 25;

        if (!homePage || hamburgerOpen) {
            return;
        }

        this.setState({
            scrolledPastBreakpoint: scrollPosition > breakpoint
        });
    };

    toggleHamburger = () => {
        const { hamburgerOpen, homePage } = this.state;

        this.setState({
            hamburgerOpen: !hamburgerOpen
        });

        if (homePage) {
            this.setState(
                {
                    scrolledPastBreakpoint: !hamburgerOpen
                },
                () => {
                    if (hamburgerOpen) {
                        this.handleScroll();
                    }
                }
            );
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
