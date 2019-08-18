import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = props => {
    const { slug, title, summary } = props;

    return (
        <div className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd">
            <div className="tile is-vertical box is-large">
                <Link to={'blog/' + slug}>
                    <p className="title">{title}</p>
                    <p className="subtitle">{summary}</p>
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;
