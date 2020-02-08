import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import ActivityListCategory from './ActivityListCategory';
import ActivityListItem from './ActivityListItem';

// TODO: pull from api

const ActivityListContainer = () => {
    const data = useLocalStorage('activityData');

    if (!data) {
        return <Loader />;
    }

    const categories = [
        ...new Set(
            data
                .map(activity => {
                    return activity.category !== 'Overig'
                        ? activity.category
                        : null;
                })
                .filter(category => {
                    return category !== null;
                })
        )
    ];

    return categories.map(category => {
        return (
            <ActivityListCategory key={category} title={category}>
                {data
                    .filter(activity => {
                        return activity.category === category;
                    })
                    .map(activity => {
                        const url = `/activiteit/${category.toLowerCase()}/${activity.title
                            .toLowerCase()
                            .replace(/ /g, '-')}`;

                        return (
                            <ActivityListItem
                                key={activity.id}
                                url={url}
                                {...activity}
                            />
                        );
                    })}
            </ActivityListCategory>
        );
    });
};

export default ActivityListContainer;
