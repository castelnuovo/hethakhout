import React from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useBlog from 'Utils/useBlog';

const BlogView = ({ id }) => {
    const data = useBlog('GET', id);
    if (!data) {
        // TODO: redirect back to /blog
        return <h1 className="title">Error: Post Not Found</h1>;
    }

    return (
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{data.title}</h1>
                        <h2 className="subtitle">
                            Posted on: {data.created_on}
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </section>
        </>
    );
};

BlogView.propTypes = {
    id: PropTypes.string.isRequired
};

export default BlogView;
