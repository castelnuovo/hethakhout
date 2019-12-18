import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import ActivityItem from './ActivityItem';

const Activities = ({ category, title }) => {
    const [data] = useLocalStorage('activityData');

    if (!data) {
        return <Loader />;
    }

    console.log(
        data.filter(activity => {
            const category_check = () =>
                activity.category
                    .toLowerCase()
                    .includes(category.toLowerCase());
            const title_check = () =>
                activity.title
                    .toLowerCase()
                    .includes(title.toLowerCase().replace('-', / /g));

            return category_check() && title_check();
        })
    );

    return (
        <ActivityItem
            // id={id}
            title="Wandelingen || Lange Route"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et, eum amet maiores tenetur totam laborum dolore at labore soluta earum vel pariatur ipsam perspiciatis facere non asperiores. Qui, architecto?"
        />
    );
};

export default Activities;
