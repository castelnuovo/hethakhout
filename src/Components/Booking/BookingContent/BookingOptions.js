import React, { useEffect } from 'react';
import BookingOption from './BookingOption';

const BookingOptions = ({ options, activeOptions, setActiveOptions }) => {
    useEffect(() => {
        setActiveOptions([]);
    }, [setActiveOptions]);

    const onSelect = (title, state) => {
        if (state) {
            setActiveOptions([...activeOptions, title]);
        } else {
            setActiveOptions(activeOptions.filter(option => option !== title));
        }
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
