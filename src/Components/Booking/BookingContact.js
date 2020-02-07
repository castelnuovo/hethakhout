import React from 'react';

// TODO: fix icons, implement react-hook-form

const Contact = () => {
    return (
        <>
            <div className="field">
                <label className="label">Naam van groepsleider</label>
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
        </>
    );
};

export default Contact;
