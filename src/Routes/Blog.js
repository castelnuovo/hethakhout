import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import BlogList from 'Components/Blog/BlogList';
import BlogView from 'Components/Blog/BlogView';

const Blog = () => {
    const { id } = useParams();

    return (
        <section className="section">
            <div className="container">
                {!id && <BlogList />}
                {id && <BlogView id={id} />}
            </div>
        </section>
    );
};

export default withBaseRoute(Blog);
