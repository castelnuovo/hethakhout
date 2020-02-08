import React from 'react';
import BookingContactInfo from 'Components/Booking/BookingContact';
import BookingExtras from 'Components/Booking/BookingOptions';
import BookingSuccess from 'Components/Booking/BookingSuccess';

const BookingContent = ({ state, options, title, category, onClickNext }) => {
    return (
        <div className="box">
            {state === 0 && <BookingContactInfo />}
            {state === 1 && (
                <BookingExtras options={options} onClickNext={onClickNext} />
            )}
            {state === 2 && (
                <BookingSuccess title={title} category={category} />
            )}
        </div>
    );
};

export default BookingContent;
