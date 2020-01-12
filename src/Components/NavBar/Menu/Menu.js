import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';
import MenuActivity from './MenuActivity';

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen
    });

    return (
        <div className={classes}>
            <div className="navbar-start">
                <MenuLink to="/shinrin-yoku">Shinrin-Yoku</MenuLink>
                <MenuActivity />
                <MenuLink to="/blog">Blog</MenuLink>
                <MenuLink to="/impressie">Impressie</MenuLink>
            </div>

            <div className="navbar-end">
                <MenuLink
                    to="/open/instagram"
                    className="navbar-item is-hidden-touch"
                >
                    <span className="icon" style={{ color: '#333' }}>
                        <i className="fab fa-instagram"></i>
                    </span>
                </MenuLink>

                <MenuBtn to="/booking">
                    <span className="icon">
                        <i className="fas fa-hiking"></i>
                    </span>
                    <span>Kom je langs?</span>
                </MenuBtn>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired
};

export default Menu;
