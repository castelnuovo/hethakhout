import React from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterBottomStyle = createGlobalStyle`
    #root {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
`;

const Footer = () => {
    return (
        <footer className="footer">
            <FooterBottomStyle />
            <div className="content has-text-centered ">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="title">Locatie</p>
                            <p>
                                <Link to="/redirect/gmaps">
                                    Langbroekerdijk B19
                                </Link>
                            </p>
                            <p>
                                <Link to="/redirect/gmaps">
                                    3947BA Langbroek
                                </Link>
                            </p>
                            <p>
                                T:
                                <Link to="/redirect/phone"> 06-2155-5574</Link>
                            </p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <Link
                            to="/activiteiten"
                            className="button is-large is-primary is-outlined"
                        >
                            Kom je langs?
                        </Link>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="title">Social media</p>
                            <Link to="/redirect/instagram">
                                <span className="icon is-large has-text-dark">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="3x"
                                    />
                                </span>
                            </Link>
                            <Link to="/redirect/facebook">
                                <span className="icon is-large has-text-dark">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="3x"
                                    />
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
