import React from 'react';
import HeroImage from './HeroImage';
import BackgroundSnapshot from 'Assets/images/trailer.jpg';
import BackgroundVideoWebM from 'Assets/videos/trailer.webm';
import BackgroundVideoMP4 from 'Assets/videos/trailer.mp4';

const Hero = () => {
    return (
        <section className="hero is-fullheight-with-navbar video">
            <div className="hero-video">
                <video
                    poster={BackgroundSnapshot}
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source src={BackgroundVideoWebM} type="video/webm" />
                    <source src={BackgroundVideoMP4} type="video/mp4" />
                </video>
            </div>

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
        </section>
    );
};

export default Hero;
