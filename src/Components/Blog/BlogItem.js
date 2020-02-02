import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, summary, hero }) => {
    const thumbnail_url = hero.data.thumbnails[4].url;

    return (
        <div className="tile is-vertical box is-large">
            <Link to={'blog/' + id}>
                <div className="columns">
                    <div className="column is-four-fifths-desktop is-half-tablet is-full-mobile">
                        <p className="title">{title}</p>
                        <p className="subtitle">{summary}</p>
                    </div>
                    <div className="column is-one-fifths-desktop half-tablet is-full-mobile">
                        <figure className="image">
                            <img
                                src={thumbnail_url}
                                alt="Blog Preview || Het Hak Hout"
                            />
                        </figure>
                    </div>
                </div>
            </Link>
        </div>
    );
};

BlogItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    hero: PropTypes.object.isRequired
};

export default BlogItem;
