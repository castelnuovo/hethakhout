import React from 'react';
import BookingContact from 'Components/Booking/BookingContact';
import BookingOptions from 'Components/Booking/BookingOptions';
import BookingSuccess from 'Components/Booking/BookingSuccess';

const BookingContent = ({
    title,
    state,
    errors,
    options,
    register,
    category,
    requestState,
    setActiveOptions
}) => {
    return (
        <div className="box">
            {state === 0 && (
                <BookingContact register={register} errors={errors} />
            )}
            {state === 1 && (
                <BookingOptions
                    state={state}
                    options={options}
                    requestState={requestState}
                    setActiveOptions={setActiveOptions}
                />
            )}
            {state === 2 && (
                <BookingSuccess title={title} category={category} />
            )}
        </div>
    );
};

export default BookingContent;
