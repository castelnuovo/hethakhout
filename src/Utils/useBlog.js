import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

const useBlog = id => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            // get from localstorage

            setData(data);
            setIsLoading(false);
        };

        getData();
    }, [data, id]);

    return [data, isLoading];
};

// useBlog.propTypes = {
//     id: PropTypes.string.optional
// };

export default useBlog;
