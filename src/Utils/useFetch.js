import { useState, useEffect } from 'react';

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

export default useFetch;