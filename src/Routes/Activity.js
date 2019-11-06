import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import ActivityItem from 'Components/Activity/ActivityItem';

const Activity = () => {
    return (
        <ActivityItem
            title="placeholder title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et, eum amet maiores tenetur totam laborum dolore at labore soluta earum vel pariatur ipsam perspiciatis facere non asperiores. Qui, architecto?
    "
        />
    );
};

export default withBaseRoute(Activity);
