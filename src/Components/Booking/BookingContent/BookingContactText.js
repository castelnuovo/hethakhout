import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ContactText = ({ id, title, placeholder, register, settings, error }) => {
    const classes = classNames('textarea', 'is-medium', {
        'is-danger': error
    });

    return (
        <div className="field">
            <label className="label is-medium" htmlFor={id}>
                {title}
            </label>
            <div className="control has-icons-right">
                <textarea
                    name={id}
                    placeholder={placeholder}
                    ref={register(settings)}
                    className={classes}
                ></textarea>

                {error && (
                    <span className="icon is-small is-right">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                )}
            </div>
            {error && <p className="help is-danger">{error.message}</p>}
        </div>
    );
};

ContactText.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    register: PropTypes.any.isRequired,
    settings: PropTypes.object.isRequired,
    error: PropTypes.object
};

ContactText.defaultProps = {
    error: null
};

export default ContactText;
