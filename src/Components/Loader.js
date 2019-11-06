import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ size }) => {
    return (
        <progress
            className={`progress is-primary is-vcentered is-${size}`}
            max="100"
        ></progress>
    );
};

Loader.propTypes = {
    size: PropTypes.string.isRequired
};

export default Loader;
