import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuMega from './MenuMega';
import MenuColumn from './MenuColumn';
import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen
    });

    return (
        <div className={classes}>
            <div className="navbar-start">
                <MenuLink to="/shinrin-yoku">Shinrin-Yoku</MenuLink>
                <MenuMega title="Activiteiten">
                    <MenuColumn title="Wandelingen">
                        <MenuLink to="/activiteiten/wandelingen/lang">
                            Lange Route
                        </MenuLink>
                        <MenuLink to="/activiteiten/wandelingen/kort">
                            Korte Route
                        </MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Jeugd">
                        <MenuLink to="/activiteiten/jeugd/voetballen">
                            Voetballen
                        </MenuLink>
                        <MenuLink to="/activiteiten/jeugd/zwemmen">
                            Zwemmen
                        </MenuLink>
                        <MenuLink to="/activiteiten/jeugd/Schieten">
                            Schieten
                        </MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Lezingen">
                        <MenuLink to="/activiteiten/lezingen/episch">
                            Episch Verhaal
                        </MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Vogels">
                        <MenuLink to="/activiteiten/vogels/huren">
                            Hutje Huren
                        </MenuLink>
                        <MenuLink to="/activiteiten/vogels/kopen">
                            Hutje Kopen
                        </MenuLink>
                    </MenuColumn>
                </MenuMega>
                <MenuMega title="Blogs">
                    <MenuColumn title="Recente Artikelen">
                        <MenuLink to="/blog/3-een-struik">
                            <div className="navbar-content">
                                <p>
                                    <small className="has-text-info">
                                        03 Aug 2017
                                    </small>
                                </p>
                                <p>Artikel 3: Een struik</p>
                            </div>
                        </MenuLink>
                        <MenuLink to="/blog/2-een-struik">
                            <div className="navbar-content">
                                <p>
                                    <small className="has-text-info">
                                        02 Aug 2017
                                    </small>
                                </p>
                                <p>Artikel 2: Een Boom</p>
                            </div>
                        </MenuLink>
                        <MenuLink to="/blog/1-een-struik">
                            <div className="navbar-content">
                                <p>
                                    <small className="has-text-info">
                                        01 Aug 2017
                                    </small>
                                </p>
                                <p>Artikel 1: Een Vogel</p>
                            </div>
                        </MenuLink>
                    </MenuColumn>
                </MenuMega>
                <MenuLink to="/fotos">Foto's</MenuLink>
            </div>

            <div className="navbar-end">
                <MenuLink
                    to="/redirect/instagram"
                    className="navbar-item is-hidden-touch"
                >
                    <span className="icon" style={{ color: '#333' }}>
                        <i className="fab fa-instagram"></i>
                    </span>
                </MenuLink>

                <MenuBtn to="/booking">
                    <span className="icon">
                        <i className="fas fa-walking"></i>
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
