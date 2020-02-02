import React from 'react';
import PropTypes from 'prop-types';
import { Loader as LoaderGif } from 'Config/Brand';

const Loader = ({ simple, title }) => {
    if (simple) {
        return (
            <div className="columns  is-centered">
                <div className="column is-narrow">
                    <div className="box is-unselectable">
                        <progress
                            className="progress is-primary is-vcentered is-large"
                            max="100"
                        ></progress>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="columns is-centered is-mobile">
            <div className="column is-narrow">
                <div className="box is-unselectable">
                    <figure className="image image is-192x192">
                        <img src={LoaderGif} alt="Loader || Het Hak Hout" />
                    </figure>
                    {title && (
                        <>
                            <hr />
                            <h1 className="title is-3 has-text-centered	">
                                {title}
                            </h1>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

Loader.propTypes = {
    simple: PropTypes.bool,
    title: PropTypes.string
};

export default Loader;
