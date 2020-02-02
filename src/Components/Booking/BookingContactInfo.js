import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
    return (
        <section className="section">
            <div className="container">
                <h1d className="title">Stap 1/4: Contactinformatie</h1d>
                <hr />
                <div className="field">
                    <label className="label">Naam</label>
                    <div className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            placeholder="Volledige naam"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left ">
                        <input
                            className="input"
                            type="email"
                            placeholder="E-mailadres"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Telefoonnummer</label>
                    <div className="control has-icons-left ">
                        <input
                            className="input"
                            type="email"
                            placeholder="Telefoonnummer"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-phone"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" /> I agree to the{' '}
                            <a href="/">terms and conditions</a>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <Link
                            to="/booking"
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

export default ContactInfo;
