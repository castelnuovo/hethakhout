import React from 'react';
import styled from 'styled-components';
import BackgroundSnapshot from 'Assets/images/trailer.jpg';
import BackgroundVideoWebM from 'Assets/videos/trailer.webm';
import BackgroundVideoMP4 from 'Assets/videos/trailer.mp4';

const StyledDiv = styled.div`
    @media screen and (max-width: 768px) {
        display: unset !important;
    }
`;

const StyledVideo = styled.video`
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    object-fit: cover;
`;

const HeroVideo = ({ children }) => {
    return (
        <section className="hero is-fullheight-with-navbar video">
            <StyledDiv className="hero-video">
                <StyledVideo
                    poster={BackgroundSnapshot}
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source src={BackgroundVideoWebM} type="video/webm" />
                    <source src={BackgroundVideoMP4} type="video/mp4" />
                </StyledVideo>
            </StyledDiv>

            {children}
        </section>
    );
};

export default HeroVideo;
