import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = props => {
    const { slug, title, summary } = props;

    return (
        <div className="tile is-vertical box is-large">
            <Link to={'blog/' + slug}>
                <p className="title">{title}</p>
                <p className="subtitle">{summary}</p>
            </Link>
        </div>
    );
};

export default BlogListItem;
