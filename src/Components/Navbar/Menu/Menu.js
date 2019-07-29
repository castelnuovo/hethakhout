import React from 'react';
import Link from './Link';
import Btn from './Btn';
import Dropdown from './Dropdown';
import Icon from '../../Icon';

const Menu = ({ styles, scrolledPastBreakpoint }) => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <Link styles={styles} to="/" isNavlink={false} title="Home" />
                <Link to="/blog" title="Blog" />
                <Link to="/foto" title="Foto's" />
                <Dropdown title="mennu" to="/menu">
                    <Link to="/blog" title="Blog" />
                    <Link to="/foto" title="Foto's" />
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

export default Menu;
