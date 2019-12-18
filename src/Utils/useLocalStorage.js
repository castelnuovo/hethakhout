import PropTypes from 'prop-types';
import useFetch from 'Utils/useFetch';

const useLocalStorage = (name, url) => {
    const [data, isLoading] = useFetch(url);

    if (!isLoading && data) {
        if (data[0].created_on) {
            data.sort((a, b) => {
                return new Date(b.created_on) - new Date(a.created_on);
            });
        }

        localStorage.setItem(name, JSON.stringify(data));
    }

    if (!url) {
        return [JSON.parse(localStorage.getItem(name)), false];
    }

    return [data, isLoading];
};

useLocalStorage.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default useLocalStorage;
