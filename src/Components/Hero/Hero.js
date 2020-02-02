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

            <div className="hero-foot">
                <div className="columns is-centered is-mobile">
                    <div className="column is-narrow is-unselectable">
                        <span className="icon is-large has-text-white">
                            <i className="fas fa-2x fa-arrow-down"></i>
                        </span>
                    </div>
                </div>
            </div>
        </HeroVideo>
    );
};

export default Hero;
