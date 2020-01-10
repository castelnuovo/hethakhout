import { useEffect } from 'react';
import PropTypes from 'prop-types';

const useClickOutside = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

useClickOutside.propTypes = {
    ref: PropTypes.func.isRequired,
    callback: PropTypes.func.isRequired
};

export default useClickOutside;
