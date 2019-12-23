import React from 'react';
import useBlog from 'Utils/useBlog';
import Loader from 'Components/Loader';
import BlogItem from './BlogItem';

const BlogList = () => {
    const data = useBlog('ALL');

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
