import React, { useState } from 'react';
import useData from 'Utils/useData';
import BookingSteps from './BookingSteps';
import BookingContent from './BookingContent';
import BookingInfo from './BookingInfo';
import BookingButtons from './BookingButtons';

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

            <BookingInfo title={title} category={category} />

            <BookingContent
                state={state}
                options={options}
                title={title}
                category={category}
                onClickNext={onClickNext}
            />

            <BookingButtons
                state={state}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        </>
    );
};

export default Booking;
