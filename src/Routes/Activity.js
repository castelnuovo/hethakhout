import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Activity from 'Components/Activity';

const ActivityRoute = ({ match }) => {
    return (
        <section className="section">
            <div className="container">
                <Activity
                    category={match.params.category}
                    title={match.params.title}
                />
            </div>
        </section>
    );
};

export default withBaseRoute(ActivityRoute);
