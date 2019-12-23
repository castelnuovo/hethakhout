import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import ActivityItem from './ActivityItem';

const Activities = ({ category, title }) => {
    const [data] = useLocalStorage('activityData');

    if (!data) {
        return <Loader />;
    }

    const activity = data.filter(activity => {
        const category_check = () =>
            activity.category.toLowerCase().includes(category.toLowerCase());
        const title_check = () =>
            activity.title
                .toLowerCase()
                .includes(title.toLowerCase().replace(/-/g, ' '));

        return category_check() && title_check();
    })[0];

    return <ActivityItem {...activity} />;
};

export default Activities;
