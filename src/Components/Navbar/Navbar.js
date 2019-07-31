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
            scrolledPastBreakpoint: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        // this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;

        this.setState({
            scrolledPastBreakpoint: scrollTop > 25
        });

        // console.log('match', this.props.match);
        // console.log('location', this.props.location);
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
                    />
                    <Menu
                        scrolledPastBreakpoint={
                            this.state.scrolledPastBreakpoint
                        }
                    />
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
