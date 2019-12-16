import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookingExtras = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Stap 2/4: Extra's</h1>
                <hr />
                {/* <div className="card">
                    <div className="card-header">
                        <div className="card-header-title title">Ontbijt</div>
                    </div>
                    <div className="card-image">
                        <figure className="image is-512x512">
                            <img
                                src="https://www.lekkerensimpel.com/wp-content/uploads/2015/05/IMG_0012_zpse6f9fc68.jpg"
                                alt="Foto van eten"
                            />
                        </figure>
                    </div>
                </div> */}
                <div className="box">
                    <article className="media">
                        <figure className="media-left image is-256x256">
                            <img
                                src="https://www.lekkerensimpel.com/wp-content/uploads/2015/05/IMG_0012_zpse6f9fc68.jpg"
                                alt="Foto van eten"
                            />
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <h1 className="title">Ontbijt</h1>
                            </div>
                            <nav className="level">
                                <div className="level-left">Beschrijving</div>
                            </nav>
                            <div className="level">
                                <div className="level-right">
                                    <div className="level-item">
                                        <button></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="box">
                    <article className="media">
                        <figure className="media-left image is-256x256">
                            <img
                                src="https://www.lekkerensimpel.com/wp-content/uploads/2015/05/IMG_0012_zpse6f9fc68.jpg"
                                alt="Foto van eten"
                            />
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <h1 className="title">Ontbijt</h1>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">Beschrijving</div>
                            </nav>
                        </div>
                    </article>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <Link
                            to="/booking_contactinfo"
                            className="button is-medium is-primary is-outlined"
                        >
                            Terug
                        </Link>
                    </div>
                    <div className="control">
                        <Link
                            to="/booking_extras"
                            className="button is-medium is-primary"
                        >
                            Volgende
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

BookingExtras.propTypes = {};

export default BookingExtras;
