import React from 'react';
// TODO: update proptypes

const ActivityOption = ({ title, image, description }) => {
    return (
        <div className="column">
            <div className="card">
                <header className="card-header">
                    <h1 className="card-header-title title">{title}</h1>
                </header>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ActivityOption;
