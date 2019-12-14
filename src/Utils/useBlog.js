import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

const useBlog = (action, id) => {
    const [data] = useLocalStorage('blogData');

    switch (action) {
        case 'ALL':
            return data;
        case 'GET':
            id = parseInt(id, 10);
            return data.filter(post => {
                return post.id === id;
            })[0];
        default:
            throw new Error();
    }
};

useBlog.propTypes = {
    action: PropTypes.string.isRequired,
    id: PropTypes.string.optional
};

export default useBlog;
