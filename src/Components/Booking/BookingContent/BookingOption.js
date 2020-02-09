import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';

const BookingOption = ({ option, onSelect }) => {
    const [selected, setSelected] = useState(false);
    option = option.charAt(0).toUpperCase() + option.slice(1);
    const data = useData('optionsData', 'GET', 'title', option);
    const thumbnail_url = data?.hero?.data?.thumbnails[4]?.url;
    const classes = classNames('column', 'is-one-third', {
        'has-background-primary': selected
    });

    if (!data) {
        return <Loader />;
    }

    return (
        <div
            className={classes}
            onClick={() => {
                setSelected(!selected);
                onSelect(data.title, !selected);
            }}
        >
            <div className="card is-unselectable">
                <header className="card-header">
                    <h1 className="card-header-title title">{data.title}</h1>
                </header>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={thumbnail_url}
                            alt="Booking Option || Het Hak Hout"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">{data.description}</div>
                </div>
            </div>
        </div>
    );
};

BookingOption.propTypes = {
    option: PropTypes.string.isRequired
};

export default BookingOption;
