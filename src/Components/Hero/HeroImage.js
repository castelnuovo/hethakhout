import React from 'react';
import styled from 'styled-components';
import Logo from 'Config/Logo';

const StyledImage = styled.img`
    max-width: 20rem;
    padding-bottom: 2rem;
`;

const HeroImage = () => {
    return (
        <figure className="center">
            <StyledImage src={Logo} className="image" alt="Logo" />
        </figure>
    );
};

export default HeroImage;
