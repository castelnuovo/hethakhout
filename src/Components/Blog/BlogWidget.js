import React from 'react';
import useFetch from 'Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from 'Components/Loader';

const BlogWidget = () => {
    const [data, isLoading] = useFetch(
        'https://jsonplaceholder.typicode.com/posts',
        []
    );

    return (
        <section className="section">
            <div className="container is-small has-text-centered">
                <h1 class="title">Recente Artikelen</h1>
                <div className="columns is-vcentered is-multiline">
                    {isLoading && <Loader size="medium" />}
                    {data.slice(0, 4).map(post => (
                        <div
                            key={post.id}
                            className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd"
                        >
                            <BlogItem
                                id={post.id}
                                title={post.title}
                                summary={post.body}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogWidget;
