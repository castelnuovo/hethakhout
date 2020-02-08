import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import ActivityListContainer from 'Components/Activity/ActivityListContainer';

const ActivityList = () => {
    return (
        <section className="section">
            <div className="container">
                <ActivityListContainer />
            </div>
        </section>
    );
};

export default withBaseRoute(ActivityList);
