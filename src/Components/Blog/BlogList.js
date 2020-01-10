import React from 'react';
import useData from 'Utils/useData';
import Loader from 'Components/Loader';
import BlogItem from './BlogItem';

const BlogList = () => {
    const data = useData('useBlog', 'ALL');

    return (
        <>
            <h1 className="title">Blog Posts</h1>
            <hr />
            {!data && <Loader />}
            {data && data.map(post => <BlogItem key={post.id} {...post} />)}
        </>
    );
};

export default BlogList;
