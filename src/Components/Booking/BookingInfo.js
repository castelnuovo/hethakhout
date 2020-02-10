import React from 'react';
import PropTypes from 'prop-types';

const BookingInfo = ({ title, category }) => {
    return (
        <div className="box">
            <div className="level">
                <div className="level-left">
                    <h1 className="level-item title">{title}</h1>
                    <h2 className="level-item subtitle">{category}</h2>
                </div>
            </div>
        </div>
    );
};

BookingInfo.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};

export default BookingInfo;
