import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const usePrevious = value => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

usePrevious.propTypes = {
    value: PropTypes.any.isRequired
};

export default usePrevious;
