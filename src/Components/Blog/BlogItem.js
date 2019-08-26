import React from 'react';
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

export default BlogItem;
