import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Redirect } from 'react-router-dom';
import useFetch from '../../Utils/useFetch';

const BlogView = ({ slug }) => {
    const [redirect, setRedirect] = useState(false);
    const [data, isLoading] = useFetch(
        'http://localhost:3000/BlogPosts/' + slug + '.md',
        [],
        false
    );

    if (isLoading) {
        return (
            <progress
                className="progress is-medium is-primary is-vcentered"
                max="100"
            ></progress>
        );
    }

    const handleRedirect = () => {
        if (redirect) {
            return <Redirect push to="/blog" />;
        }
    };

    return (
        <div className="modal is-active is-clipped">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">TITLE</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => setRedirect(true)}
                    ></button>
                </header>
                <section className="modal-card-body">
                    {isLoading ? (
                        <progress
                            className="progress is-medium is-primary is-vcentered"
                            max="100"
                        ></progress>
                    ) : (
                        <Markdown>{data}</Markdown>
                    )}
                </section>
            </div>

            {handleRedirect()}
        </div>
    );
};

export default BlogView;
