import React, { useState } from 'react';
import useData from 'Utils/useData';
import BookingSteps from './BookingSteps';
import BookingButtons from './BookingButtons';

import BookingContactInfo from 'Components/Booking/BookingContact';
import BookingExtras from 'Components/Booking/BookingOptions';
import BookingSuccess from 'Components/Booking/BookingSuccess';

const Booking = ({ id }) => {
    const [state, setState] = useState(0);
    const { title, category, options } = useData(
        'activityData',
        'GET',
        'id',
        parseInt(id)
    );

    const requestState = state => {
        if (state < 0 || state > 2) {
            return;
        }

        setState(state);
        // TODO: add logic to check if user can access the step in question
        // cant access "confirmation" before "finishing contactinfo"
    };

    const onClickPrevious = () => {
        requestState(state - 1);
    };

    const onClickNext = () => {
        requestState(state + 1);
    };

    return (
        <>
            <BookingSteps
                state={state}
                options={options}
                requestState={requestState}
            />

            <div className="box">
                <div className="level">
                    <div className="level-left">
                        <h1 className="level-item title">{title}</h1>
                        <h2 className="level-item subtitle">{category}</h2>
                    </div>
                </div>
            </div>

            <div className="box">
                {state === 0 && <BookingContactInfo />}
                {state === 1 && (
                    <BookingExtras
                        options={options}
                        onClickNext={onClickNext}
                    />
                )}
                {state === 2 && (
                    <BookingSuccess title={title} category={category} />
                )}
            </div>

            <BookingButtons
                state={state}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        </>
    );
};

export default Booking;
