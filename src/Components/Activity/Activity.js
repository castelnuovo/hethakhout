import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import ActivityItem from './ActivityItem';

const Activities = ({ id }) => {
    const [data] = useLocalStorage('activityData');

    console.log('activities', data);
    console.log('activitiy-id', id);

    if (!data) {
        return <Loader />;
    }

    return (
        <ActivityItem
            id={id}
            title="placeholder title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et, eum amet maiores tenetur totam laborum dolore at labore soluta earum vel pariatur ipsam perspiciatis facere non asperiores. Qui, architecto?
"
        />
    );
};

export default Activities;
