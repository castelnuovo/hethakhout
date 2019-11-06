import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered ">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="title">Locatie</p>
                            <p>Straatlaan 123</p>
                            <p>1234AB Overlangbroek</p>
                            <p>
                                T:
                                <Link to="/redirect/phone">06-1234-5678</Link>
                            </p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <Link
                            to="/booking"
                            className="button is-large is-primary is-outlined"
                        >
                            Kom je langs?
                        </Link>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="title">Social media</p>

                            <Link to="/redirect/facebook">
                                <span className="icon is-large has-text-dark">
                                    <i className="fab fa-facebook-square fa-3x"></i>
                                </span>
                            </Link>

                            <Link to="/redirect/instagram">
                                <span className="icon is-large has-text-dark">
                                    <i className="fab fa-instagram fa-3x"></i>
                                </span>
                            </Link>

                            <Link to="/redirect/linkedin">
                                <span className="icon is-large has-text-dark">
                                    <i className="fab fa-linkedin fa-3x"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
