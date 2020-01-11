import React from 'react';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';
import BlogItem from './BlogItem';

const BlogWidget = () => {
    const data = useData('blogData', 'ALL');

    return (
        <section className="section">
            <div className="container is-small has-text-centered">
                <h1 className="title">Recente Posts</h1>
                <div className="columns is-vcentered is-multiline">
                    {!data && <Loader />}
                    {data &&
                        data.slice(0, 4).map(post => (
                            <div
                                key={post.id}
                                className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd"
                            >
                                <BlogItem {...post} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default BlogWidget;
