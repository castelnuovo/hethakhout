import React from 'react';
import BookingOption from './BookingOption';

const BookingOptions = ({ state, requestState, options, setActiveOptions }) => {
    if (options.length === 0) {
        requestState(state + 1);
    }

    let activeOptions = [];

    const onSelect = (title, state) => {
        title = title + 'wip';

        if (state) {
            activeOptions.push(title);
        } else {
            activeOptions = activeOptions.filter(item => item !== title);
        }

        console.log('booking', activeOptions);
        // setActiveOptions(activeOptions);
    };

    return (
        <div className="columns is-multiline">
            {options.map(option => (
                <BookingOption
                    key={option}
                    option={option}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default BookingOptions;
