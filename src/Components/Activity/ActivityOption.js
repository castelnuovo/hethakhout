import React from 'react';
import PropTypes from 'prop-types';
import useData from 'Utils/useData';

const ActivityOption = ({ option }) => {
    option = option.charAt(0).toUpperCase() + option.slice(1);

    const data = useData('optionsData', 'GET', 'title', option);
    const { title, hero, description } = data;
    const thumbnail_url = hero.data.thumbnails[4].url;

    return (
        <div className="column is-one-third">
            <div className="card">
                <header className="card-header">
                    <h1 className="card-header-title title">{title}</h1>
                </header>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={thumbnail_url} alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">{description}</div>
                </div>
            </div>
        </div>
    );
};

ActivityOption.propTypes = {
    option: PropTypes.string.isRequired
};

export default ActivityOption;
