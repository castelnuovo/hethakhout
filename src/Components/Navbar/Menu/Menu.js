import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';
import MenuDropdown from './MenuDropdown';
import Icon from 'Components/Icon';

const Menu = ({ hamburgerOpen }) => {
    let classes = {
        open: classNames('navbar-menu', 'is-active'),
        close: classNames('navbar-menu')
    };

    // TODO: find way to use - in object key
    // let classes = classNames('navbar-menu', {
    //     is-active: hamburgerOpen
    // });

    return (
        <div className={hamburgerOpen ? classes.open : classes.close}>
            <div className="navbar-end">
                <MenuLink to="/" hasActiveState={false}>
                    Home
                </MenuLink>
                <MenuLink to="/blog">Blog</MenuLink>
                <MenuLink to="/rondleidingen/123">Rondleidingen</MenuLink>
                <MenuLink to="/foto">Foto's</MenuLink>
                <MenuDropdown title="Dropdown">
                    <MenuLink to="/dropdown/1">Dropdown 1</MenuLink>
                    <MenuLink to="/dropdown/2">Dropdown 2</MenuLink>
                </MenuDropdown>
                <MenuBtn to="/walking">
                    <Icon type="fas" icon="walking" />
                    <span>Boek een Wandeling</span>
                </MenuBtn>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired
};

export default Menu;
