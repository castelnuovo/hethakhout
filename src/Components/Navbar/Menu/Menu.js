import React from 'react';
import Link from './Link';
import Btn from './Btn';
import Dropdown from './Dropdown';
import Icon from '../../Icon';

const Menu = ({ scrolledPastBreakpoint }) => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <Link to="/">Home</Link>
                <Link to="/tour/PARAM_ID">Rondleidingen</Link>
                <Link to="/foto">Foto's</Link>
                <Dropdown to="/dropdown" title="Dropdown">
                    <Link to={{ pathname: '/tour/1', state: { foo: 'bar' } }}>
                        Dropdown 1
                    </Link>
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
