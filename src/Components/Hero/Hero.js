import React from 'react';
import HeroVideo from './HeroVideo';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        <HeroVideo>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <HeroImage />
                    <h1 className="title has-text-white">
                        Welkom bij Het Hak Hout
                    </h1>
                    <h2 className="subtitle has-text-white">
                        Natuuractiviteiten, Shinrin-Yoku en Wandelingen
                    </h2>
                </div>
            </div>
        </HeroVideo>
    );
};

export default Hero;
