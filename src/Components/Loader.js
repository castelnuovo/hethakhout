import React from 'react';

const Loader = () => {
    return (
        <progress
            className="progress is-primary is-vcentered is-large"
            max="100"
        ></progress>
    );
};

export default Loader;
