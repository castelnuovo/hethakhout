import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFetch = (url, defaultData, isJson = true) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            let data = await fetch(url);

            if (isJson) {
                data = await data.json();
            } else {
                data = await data.text();
            }

            setData(data);
            setIsLoading(false);
        };

        fetchData();
    }, [isJson, url]);

    return [data, isLoading];
};

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
    defaultData: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    isJson: PropTypes.bool.isRequired
};

export default useFetch;
