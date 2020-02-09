import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';

const BookingOption = ({ option, onSelect }) => {
    option = option.charAt(0).toUpperCase() + option.slice(1);
    const data = useData('optionsData', 'GET', 'title', option);
    const [selected, setSelected] = useState(false);

    const { title, hero, description } = data;
    const thumbnail_url = hero?.data?.thumbnails[4]?.url;

    if (!data) {
        return <Loader />;
    }

    const onClick = () => {
        setSelected(!selected);
        onSelect(title, !selected);
    };

    return (
        <div
            className={`column is-one-third ${selected &&
                'has-background-primary'}`}
            onClick={() => onClick()}
        >
            <div className="card is-unselectable">
                <header className="card-header">
                    <h1 className="card-header-title title">{title}</h1>
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
                    <div className="content">{description}</div>
                </div>
            </div>
        </div>
    );
};

BookingOption.propTypes = {
    option: PropTypes.string.isRequired
};

export default BookingOption;
