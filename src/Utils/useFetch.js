import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFetch = url => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async url => {
            setIsLoading(true);

            let data = await fetch(url);
            data = await data.json();

            setData(data.data);
            setIsLoading(false);
        };

        if (url && url.includes('https://')) {
            fetchData(url);
        }
    }, [url]);

    return [data, isLoading];
};

useFetch.propTypes = {
    url: PropTypes.string
};

export default useFetch;
