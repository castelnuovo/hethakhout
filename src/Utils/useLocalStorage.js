import PropTypes from 'prop-types';
import useFetch from 'Utils/useFetch';

const useLocalStorage = (name, url) => {
    // TODO: if url is empty return data from localStorage

    const [data, isLoading] = useFetch(url);

    if (!isLoading) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    return [data, isLoading];
};

useLocalStorage.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default useLocalStorage;
