import React from 'react';
import HeroVideo from './HeroVideo';
import HeroImage from './HeroImage';

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
        </HeroVideo>
    );
};

export default Hero;
