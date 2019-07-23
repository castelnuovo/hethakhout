import React from 'react';
import './Hero.scss';
import logo from '../../Assets/images/logo_orange_without_brand.png';

const Hero = () => {
    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <figure className="image hero-image-container">
                        <img
                            src={logo}
                            alt="Logo || Het Hak Hout"
                            className="hero-image"
                        />
                    </figure>
                    <h1 className="title">Het Hak Hout</h1>
                    <h2 className="subtitle">
                        Wandelingen, Rondleidingen en Meer
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
