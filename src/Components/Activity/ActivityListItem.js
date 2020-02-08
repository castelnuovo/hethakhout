import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActivityListItem = ({ id, url, title }) => {
    return (
        <article className="tile is-child notification is-primary">
            <div className="level">
                <div className="level-left">
                    <Link to={url}>
                        <h1 className="level-item title">{title}</h1>
                    </Link>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <Link
                            to={`/boeking/${id}`}
                            className="button is-medium"
                        >
                            Boek
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

ActivityListItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ActivityListItem;
