import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFetch = url => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            let data = await fetch(url);
            data = await data.json();

            setData(data.data);
            setIsLoading(false);
        };

        if (url) {
            fetchData();
        }
    }, [url]);

    return [data, isLoading];
};

useFetch.propTypes = {
    url: PropTypes.string.isRequired
};

export default useFetch;
