import React from 'react';
import BookingOption from './BookingOption';
import PropTypes from 'prop-types';

const BookingOptions = ({ onClickNext, options }) => {
    if (options.length === 0) {
        onClickNext();
    }

    // TODO: make an "extra" item selectable and save to state

    return (
        <div className="columns is-multiline">
            {options.map(option => (
                <BookingOption key={option} option={option} />
            ))}
        </div>
    );
};

BookingOptions.propTypes = {
    onClickNext: PropTypes.func.isRequired,
    options: PropTypes.number.isRequired
};
export default BookingOptions;
