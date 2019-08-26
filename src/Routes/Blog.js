import React from 'react';
import PropTypes from 'prop-types';
import withBaseRoute from '../Utils/withBaseRoute';
import BlogList from '../Components/Blog/BlogList';
import BlogView from '../Components/Blog/BlogView';

const Blog = ({ match }) => {
    const id = match.params.id;

    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title">Blog Posts</h1>
                    <BlogList />
                    {id && <BlogView id={id} />}
                </div>
            </section>
        </div>
    );
};

Blog.propTypes = {
    match: PropTypes.object.isRequired
};

export default withBaseRoute(Blog);
