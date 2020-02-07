import React from 'react';
import BookingOption from './BookingOption';

const BookingOptions = ({ onClickNext, options }) => {
    if (options.length === 0) {
        onClickNext();
    }

    // TODO: make item selectable

    return (
        <div className="columns is-multiline">
            {options.map(option => (
                <BookingOption key={option} option={option} />
            ))}
        </div>
    );
};

export default BookingOptions;
