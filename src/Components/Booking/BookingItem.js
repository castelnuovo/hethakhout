import React from 'react';
import PropTypes from 'prop-types';

const BookingItem = ({ title, description }) => {
    return (
        <article className="tile is-child notification is-primary">
            <div className="columns is-vcentered">
                <div className="column is-four-fifths">
                    <p className="title">{title}</p>
                    <p className="subtitle">{description}</p>
                </div>
                <div className="column"></div>
                <div className="column">
                    <div className="button is-medium">Kies</div>
                </div>
            </div>
        </article>
    );
};

BookingItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default BookingItem;
