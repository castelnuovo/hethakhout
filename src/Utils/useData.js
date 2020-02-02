import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

const useData = (storage, action, filter_by, search) => {
    const data = useLocalStorage(storage);

    switch (action) {
        case 'ALL':
            return data;
        case 'GET':
            try {
                return data.filter(item => {
                    return item[filter_by] === search;
                })[0];
            } catch (error) {
                return undefined;
            }
        default:
            throw new Error();
    }
};

useData.propTypes = {
    storage: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    id: PropTypes.string,
    filter_by: PropTypes.string
};

export default useData;
