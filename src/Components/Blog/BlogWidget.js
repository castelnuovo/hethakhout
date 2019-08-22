import React from 'react';
import useFetch from '../../Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from '../Loader';

const BlogWidget = () => {
    const [data, isLoading] = useFetch(
        'http://localhost:3000/BlogPosts.json',
        []
    );

    if (isLoading) {
        return <Loader size="medium" />;
    }

    return (
        <section className="section">
            <div className="container is-small has-text-centered">
                <div className="columns is-vcentered is-multiline">
                    {data.map(post => (
                        <div
                            key={post.slug}
                            className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd"
                        >
                            <BlogItem
                                slug={post.slug}
                                title={post.title}
                                summary={post.summary}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogWidget;
