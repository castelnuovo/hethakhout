import React from 'react';
import PropTypes from 'prop-types';

const BookingSteps = ({ state, onClickNext, onClickPrevious }) => {
    return (
        <div className="buttons is-right">
            {state !== 0 && state !== 2 && (
                <button
                    className="button is-medium is-primary is-outlined"
                    onClick={() => onClickPrevious()}
                >
                    Terug
                </button>
            )}

            {state !== 2 && (
                <button
                    className="button is-medium is-primary"
                    onClick={() => onClickNext()}
                >
                    Volgende
                </button>
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
