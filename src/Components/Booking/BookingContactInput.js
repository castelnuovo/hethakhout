import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ContactInput = ({
    id,
    title,
    placeholder,
    register,
    settings,
    error
}) => {
    return (
        <div className="field">
            <label className="label is-medium" htmlFor={id}>
                {title}
            </label>
            <div className="control has-icons-right">
                <input
                    type="text"
                    name={id}
                    placeholder={placeholder}
                    ref={register(settings)}
                    className={`input is-medium ${error && 'is-danger'}`}
                />

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

ContactInput.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    register: PropTypes.any.isRequired,
    settings: PropTypes.object.isRequired,
    error: PropTypes.object
};

ContactInput.defaultProps = {
    error: null
};

export default ContactInput;
