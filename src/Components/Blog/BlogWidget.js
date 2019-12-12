import React from 'react';
import useFetch from 'Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from 'Components/Loader';

const BlogWidget = () => {
    const [data, isLoading] = useFetch(
        'https://cms.hethakhout.nl/het-hak-hout/items/articles'
    );

    return (
        <section className="section">
            {console.log(data)}
            <div className="container is-small has-text-centered">
                <h1 className="title">Recente Posts</h1>
                <div className="columns is-vcentered is-multiline">
                    {isLoading && <Loader size="medium" />}
                    {!isLoading &&
                        data &&
                        data.slice(0, 4).map(post => (
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
