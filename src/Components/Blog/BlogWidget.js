import React from 'react';
import useFetch from '../../Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from '../Loader';

const BlogWidget = () => {
    const [data, isLoading] = useFetch('/api/posts/', []);

    return (
        <section className="section">
            <div className="container is-small has-text-centered">
                <div className="columns is-vcentered is-multiline">
                    {isLoading && <Loader size="medium" />}
                    {data.map(post => (
                        <div
                            key={post.id}
                            className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd"
                        >
                            <BlogItem
                                id={post.id}
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
