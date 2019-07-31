import React from 'react';
import classNames from 'classnames';
import Link from './Link';
import Btn from './Btn';
import Dropdown from './Dropdown';
import Icon from '../../Icon';

const Menu = ({ scrolledPastBreakpoint, hamburgerOpen }) => {
    let classes = {
        open: classNames('navbar-menu', 'is-active'),
        close: classNames('navbar-menu')
    };

    return (
        <div className={hamburgerOpen ? classes.open : classes.close}>
            <div className="navbar-end">
                <Link to="/" hasActiveState={false}>
                    Home
                </Link>
                <Link to="/tour/PARAM_ID">Rondleidingen</Link>
                <Link to="/foto">Foto's</Link>
                <Dropdown title="Dropdown">
                    <Link to="/dropdown/1">Dropdown 1</Link>
                    <Link to="/dropdown/2">Dropdown 2</Link>
                </Dropdown>
                <Btn
                    to="/walking"
                    scrolledPastBreakpoint={scrolledPastBreakpoint}
                >
                    <Icon type="fas" icon="walking" />
                    <span>Boek een Wandeling</span>
                </Btn>
            </div>
        </div>
    );
};

// REQUIRED PROPS: scrolledPastBreakpoint (boolean)

export default Menu;
