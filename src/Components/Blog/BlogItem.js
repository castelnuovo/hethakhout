import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, summary }) => {
    return (
        <div className="tile is-vertical box is-large">
            <Link to={'blog/' + id}>
                <p className="title">{title}</p>
                <p className="subtitle">{summary}</p>
            </Link>
        </div>
    );
};

BlogItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
};

export default BlogItem;
