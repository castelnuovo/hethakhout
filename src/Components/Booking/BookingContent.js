import React from 'react';
import BookingContactInfo from 'Components/Booking/BookingContact';
import BookingExtras from 'Components/Booking/BookingOptions';
import BookingSuccess from 'Components/Booking/BookingSuccess';
import PropTypes from 'prop-types';

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

BookingContent.propTypes = {
    state: PropTypes.number.isRequired,
    options: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onClickNext: PropTypes.func.isRequired
};

export default BookingContent;
