import React from 'react';
import styled from 'styled-components';
import Logo from 'Config/Logo';

const StyledFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    max-width: 20rem;
    padding-bottom: 2rem;
`;

const HeroImage = () => {
    return (
        <StyledFigure>
            <StyledImage src={Logo} className="image" alt="Logo" />
        </StyledFigure>
    );
};

export default HeroImage;
