import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroVideo from './HeroVideo';
import HeroImage from './HeroImage';

const StyledBounce = keyframes`
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`;

const StyledSpan = styled.span`
    animation: ${StyledBounce} 2s infinite;
`;

const Hero = () => {
    return (
        <HeroVideo>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <HeroImage />
                    <h2 className="subtitle is-3 has-text-white">
                        Natuuractiviteiten, Shinrin-Yoku en Wandelingen
                    </h2>
                </div>
            </div>

            <div
                className="hero-foot"
                onClick={() => console.log('scroll clicked')}
            >
                <div className="container has-text-centered">
                    <StyledSpan className="icon is-large has-text-white">
                        <i className="fas fa-2x fa-arrow-down"></i>
                    </StyledSpan>
                </div>
            </div>
        </HeroVideo>
    );
};

export default Hero;
