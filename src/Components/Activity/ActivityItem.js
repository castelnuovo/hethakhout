import React from 'react';
import PropTypes from 'prop-types';
import TestPicture from 'Assets/images/logo_green.png';

const ActivityItem = ({ title, description }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="box">
                    <h1 className="title">{title}</h1>
                    <div className="columns is-size-5">
                        <div className="column is-four-fifths">
                            <p>{description}</p>
                        </div>
                        <div className="column">
                            <img src={TestPicture} alt="alt" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="columns">
                        <div className="column">
                            <img src={TestPicture} alt="alt" />
                        </div>
                        <div className="column">
                            <img src={TestPicture} alt="alt" />
                        </div>
                        <div className="column">
                            <img src={TestPicture} alt="alt" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h1 className="title">Schrijf je in</h1>
                    <p className="is-size-4">(form in zetten)</p>
                </div>
            </div>
        </section>
    );
};

ActivityItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ActivityItem;
