import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered ">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="title">Locatie</p>
                            <p>straatlaan 123</p>
                            <p>1234AB Overlangbroek</p>
                            <p>
                                T: <a href="tel: 1234567890">1234</a>
                            </p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <a
                            href="/"
                            className="button is-large is-primary is-outlined"
                        >
                            Kom je langs?
                        </a>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="title">Social media</p>
                            <a href="/">
                                <span class="icon is-large has-text-dark">
                                    <i class="fab fa-instagram fa-3x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span class="icon is-large has-text-dark">
                                    <i class="fab fa-facebook-square fa-3x"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
