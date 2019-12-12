import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from './MenuLink';

const MenuBtn = ({ to, children }) => {
    return (
        <div className="navbar-item">
            <div className="field is-grouped">
                <p className="control">
                    <MenuLink
                        to={to}
                        className={'button is-primary is-outlined'}
                    >
                        {children}
                    </MenuLink>
                </p>
            </div>
        </div>
    );
};

MenuBtn.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default MenuBtn;
