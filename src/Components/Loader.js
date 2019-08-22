import React from 'react';

const Loader = ({ isLoading, size }) => {
    return (
        <progress
            className={`progress is-primary is-vcentered is-${size}`}
            max="100"
        ></progress>
    );
};

export default Loader;
