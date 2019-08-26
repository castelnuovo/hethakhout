import React from 'react';
import HeroStyles from './Hero.module.scss';
import HeroImage from './HeroImage';
import BackgroundVideo from '../../Assets/videos/trailer.mp4';

const Hero = () => {
    return (
        <section className="hero is-fullheight-with-navbar video">
            <div className="hero-video">
                <video poster="img/bgimg.jpg" playsInline autoPlay muted loop>
                    <source src="vid/BGvid.webm" type="video/webm" />
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <HeroImage styles={HeroStyles} />
                    <h1 className="title has-text-white">
                        Welkom bij Het Hak Hout
                    </h1>
                    <h2 className="subtitle has-text-white">
                        Rondleidingen, Wandelingen en Meer
                    </h2>
                </div>
            </div>

            <div className="hero-foot">
                <div className="has-text-centered">
                    <p>Scroll</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
