import React from 'react';
import withBaseRoute from '../Utils/withBaseRoute';
import BlogList from '../Components/Blog/BlogList';
import BlogView from '../Components/Blog/BlogView';

const Blog = ({ match }) => {
    const slug = match.params.slug;

    return (
        <div>
            <section className="section">
                <div className="container">
                    <BlogList />
                    {slug && <BlogView slug={slug} />}
                </div>
            </section>
        </div>
    );
};

export default withBaseRoute(Blog);
