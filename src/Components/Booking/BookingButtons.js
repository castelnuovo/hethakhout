import React from 'react';

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

export default BookingSteps;
