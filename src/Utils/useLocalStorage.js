import PropTypes from 'prop-types';
import useFetch from 'Utils/useFetch';

const useLocalStorage = (name, url) => {
    const [data, isLoading] = useFetch(url);

    if (!isLoading && data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    if (!url) {
        return JSON.parse(localStorage.getItem(name));
    }
};

useLocalStorage.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default useLocalStorage;
