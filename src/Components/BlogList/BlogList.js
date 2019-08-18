import React from 'react';
import useFetch from '../../Utils/useFetch';
import BlogListItem from './BlogListItem';

const BlogList = () => {
    const [data, isLoading] = useFetch(
        'http://localhost:3000/BlogPosts.json',
        []
    );

    if (isLoading) {
        return (
            <progress
                className="progress is-medium is-primary is-vcentered"
                max="100"
            ></progress>
        );
    }

    return (
        <React.Fragment>
            <h1 className="title">Blog Posts</h1>

            {data.map(post => (
                <BlogListItem
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    summary={post.summary}
                />
            ))}
        </React.Fragment>
    );
};

export default BlogList;
