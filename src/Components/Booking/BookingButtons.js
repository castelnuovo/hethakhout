import React from 'react';
import PropTypes from 'prop-types';

const BookingSteps = ({ state, requestState }) => {
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

BookingSteps.propTypes = {
    state: PropTypes.number.isRequired,
    onClickNext: PropTypes.func.isRequired,
    onClickPrevious: PropTypes.func.isRequired
};

export default BookingSteps;
