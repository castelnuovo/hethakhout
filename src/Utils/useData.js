import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

const useData = (storage, action, id) => {
    const [data] = useLocalStorage(storage);

    switch (action) {
        case 'ALL':
            return data;
        case 'GET':
            id = parseInt(id, 10);
            return data.filter(item => {
                return item.id === id;
            })[0];
        default:
            throw new Error();
    }
};

useData.propTypes = {
    storage: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    id: PropTypes.string
};

export default useData;
