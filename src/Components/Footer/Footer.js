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
                            <p>Langbroekerdijk B19</p>
                            <p>3947BA Langbroek</p>
                            <p>
                                T:
                                <Link to="/open/phone"> 06-2155-5574</Link>
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
                            <Link to="/open/instagram">
                                <span className="icon is-large has-text-dark">
                                    <i className="fab fa-instagram fa-3x"></i>
                                </span>
                            </Link>
                            <Link to="/open/facebook">
                                <span className="icon is-large has-text-dark">
                                    <i className="fab fa-facebook-square fa-3x"></i>
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
