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
                <MenuLink to="/shinrin-yoku">Shinrin-Yoku</MenuLink>

                <MenuDropdown title="Activiteiten">
                    <MenuLink to="/wandelingen">Wandelingen</MenuLink>
                    {/* <MenuDropdown title="Wandelingen">
                        <MenuLink to="/wandelingen/lang">Lange Wandeling</MenuLink>
                        <MenuLink to="/wandelingen/kort">Korte Wandeling</MenuLink>
                        <MenuLink to="/wandelingen/stilte">Stilte Wandeling</MenuLink>
                        <MenuLink to="/wandelingen/reeen">Reeën Wandeling</MenuLink>
                    </MenuDropdown> */}
                    <MenuLink to="/jeugd">Jeugd</MenuLink>
                    <MenuLink to="/lezing">Lezing</MenuLink>
                    <MenuLink to="/vogels">Vogels</MenuLink>
                </MenuDropdown>

                <MenuLink to="/foto">Foto's</MenuLink>
                <MenuLink to="/blog">Blog</MenuLink>

                <MenuBtn to="/walking">
                    <Icon type="fas" icon="walking" />
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
