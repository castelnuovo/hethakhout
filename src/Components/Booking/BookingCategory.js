import React from 'react';
import PropTypes from 'prop-types';

const BookingCategory = ({ title, children }) => {
    return (
        <div className="box">
            <h1 className="title">{title}</h1>
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookingCategory.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default BookingCategory;
