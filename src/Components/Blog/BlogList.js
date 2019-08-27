import React from 'react';
import useFetch from 'Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from 'Components/Loader';

const BlogList = () => {
    const [data, isLoading] = useFetch('/api/posts', []);

    if (isLoading) {
        return <Loader size="medium" />;
    }

    return data.map(post => (
        <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.body}
        />
    ));
};

export default BlogList;
