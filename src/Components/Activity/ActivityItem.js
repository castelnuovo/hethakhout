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
                <div
                    className="content is-large"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </div>
            <div className="box">
                <h1 className="title">Opties</h1>
                <p className="is-size-4">Lijstje met mogelijke extra's</p>
            </div>
        </>
    );
};

ActivityItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ActivityItem;
