import React from 'react';
import useFetch from '../../Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from '../Loader';

const BlogList = () => {
    const [data, isLoading] = useFetch(
        'http://localhost:3000/BlogPosts.json',
        []
    );

    if (isLoading) {
        return <Loader size="medium" />;
    }

    return data.map(post => (
        <BlogItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            summary={post.summary}
        />
    ));
};

export default BlogList;
