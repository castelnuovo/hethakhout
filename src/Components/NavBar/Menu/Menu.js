import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import MenuLink from './MenuLink';
import MenuBtn from './MenuBtn';
import MenuActivity from './MenuActivity';

const StyledDiv = styled.div`
    @media screen and (max-width: 1023px) {
        padding-bottom: 5rem !important;
    }
`;

const Menu = ({ hamburgerOpen }) => {
    const classes = classNames('navbar-menu', {
        'is-active': hamburgerOpen
    });

    return (
        <StyledDiv className={classes}>
            <div className="navbar-start">
                <MenuLink to="/activiteit/overig/shinrin-yoku">
                    Shinrin-Yoku
                </MenuLink>
                <MenuActivity />
                <MenuLink to="/blog">Blog</MenuLink>
                <MenuLink to="/impressie">Impressie</MenuLink>
            </div>

            <div className="navbar-end">
                <MenuLink
                    to="/redirect/instagram"
                    className="navbar-item is-hidden-touch"
                >
                    <span className="icon" style={{ color: '#333' }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </MenuLink>

                <MenuBtn to="/activiteiten">
                    <span className="icon">
                        <FontAwesomeIcon icon={faHiking} />
                    </span>
                    <span>Kom je langs?</span>
                </MenuBtn>
            </div>
        </StyledDiv>
    );
};

Menu.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired
};

export default Menu;
