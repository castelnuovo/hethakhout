import React from 'react';
import useBlog from 'Utils/useBlog';
import BlogItem from './BlogItem';

const BlogList = () => {
    const data = useBlog('ALL');

    return (
        <>
            <h1 className="title">Blog Posts</h1>
            {data &&
                data.map(post => (
                    <BlogItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        summary={post.summary}
                    />
                ))}
        </>
    );
};

export default BlogList;
