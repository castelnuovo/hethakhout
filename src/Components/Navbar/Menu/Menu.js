import React from 'react';
import classNames from 'classnames';
import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';
import MenuDropdown from './MenuDropdown';
import Icon from '../../Icon';

const Menu = ({ scrolledPastBreakpoint, hamburgerOpen }) => {
    let classes = {
        open: classNames('navbar-menu', 'is-active'),
        close: classNames('navbar-menu')
    };

    return (
        <div className={hamburgerOpen ? classes.open : classes.close}>
            <div className="navbar-end">
                <MenuLink to="/" hasActiveState={false}>
                    Home
                </MenuLink>
                <MenuLink to="/rondleidingen/123">Rondleidingen</MenuLink>
                <MenuLink to="/foto">Foto's</MenuLink>
                <MenuDropdown title="Dropdown">
                    <MenuLink to="/dropdown/1">Dropdown 1</MenuLink>
                    <MenuLink to="/dropdown/2">Dropdown 2</MenuLink>
                </MenuDropdown>
                <MenuBtn
                    to="/walking"
                    scrolledPastBreakpoint={scrolledPastBreakpoint}
                >
                    <Icon type="fas" icon="walking" />
                    <span>Boek een Wandeling</span>
                </MenuBtn>
            </div>
        </div>
    );
};

// REQUIRED PROPS: scrolledPastBreakpoint (boolean)

export default Menu;
