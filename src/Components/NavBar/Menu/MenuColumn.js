import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    margin-bottom: 0;
    padding: 0.375rem 1rem;
`;

const MenuColumn = ({ title, children }) => {
    return (
        <div className="column">
            <StyledH1 className="title is-6">{title}</StyledH1>
            {children}
        </div>
    );
};

MenuColumn.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
export default MenuColumn;
