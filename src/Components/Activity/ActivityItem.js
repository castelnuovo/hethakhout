import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TestPicture from 'Assets/images/logo_green.png';

const ActivityItem = ({ id, title, category, description }) => {
    return (
        <>
            <div className="level">
                <div className="level-left">
                    <h1 className="level-item title">{title}</h1>
                    <h2 className="level-item subtitle">{category}</h2>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <Link
                            to={`/booking/${id}`}
                            className="button is-large is-link"
                        >
                            Boeken
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="box">
                <p className="is-size-4">{description}</p>
            </div>
            <div className="box">
                <h1 className="title">Foto's</h1>
                <hr />
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
                <h1 className="title">Extra's</h1>
                <p className="is-size-4">Lijstje met mogelijke extra's</p>
            </div>
        </>
    );
};

ActivityItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ActivityItem;
