import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { Redirect } from 'react-router-dom';
import useFetch from '../../Utils/useFetch';
import Loader from '../Loader';

const BlogView = ({ id }) => {
    const [redirect, setRedirect] = useState(false);
    const [data, isLoading] = useFetch('/api/posts/' + id + '.md', [], false);

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
                    {isLoading && <Loader size="medium" />}
                    {!isLoading && <Markdown>{data}</Markdown>}
                </section>
            </div>

            {handleRedirect()}
        </div>
    );
};

BlogView.propTypes = {
    id: PropTypes.number.isRequired
};

export default BlogView;
