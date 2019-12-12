import React from 'react';
import useFetch from 'Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from 'Components/Loader';

const BlogList = () => {
    const [data, isLoading] = useFetch(
        'https://cms.hethakhout.nl/het-hak-hout/items/articles'
    );

    if (isLoading) {
        return <Loader size="medium" />;
    }

    return (
        <>
            <h1 className="title">Blog Posts</h1>
            {data &&
                data.map(post => (
                    <BlogItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        summary={post.body}
                    />
                ))}
        </>
    );
};

export default BlogList;
