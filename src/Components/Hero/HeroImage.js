import React from 'react';
import styled from 'styled-components';
import { Hero as Logo } from 'Config/Brand';

const StyledFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    padding-bottom: 0.5rem;
`;

const HeroImage = () => {
    return (
        <StyledFigure>
            <StyledImage
                src={Logo}
                className="image"
                alt="Hero || Het Hak Hout"
            />
        </StyledFigure>
    );
};

export default HeroImage;
