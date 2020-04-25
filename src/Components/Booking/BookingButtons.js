import React from 'react';
import PropTypes from 'prop-types';

const BookingButtons = ({ state, requestState }) => {
    return (
        <div className="buttons is-right">
            {state !== 0 && state !== 2 && (
                <span
                    className="button is-medium is-primary is-outlined"
                    onClick={() => requestState(state - 1)}
                >
                    Terug
                </span>
            )}

            {state !== 2 && (
                <span
                    className="button is-medium is-primary"
                    onClick={() => requestState(state + 1)}
                >
                    Volgende
                </span>
            )}
        </div>
    );
};

BookingButtons.propTypes = {
    state: PropTypes.number.isRequired,
    requestState: PropTypes.func.isRequired,
};

export default BookingButtons;
