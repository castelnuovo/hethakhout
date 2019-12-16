import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Activity from 'Components/Activity';

const ActivityRoute = ({ match }) => {
    return (
        <section className="section">
            <div className="container">
                <Activity id={match.params.id} />
            </div>
        </section>
    );
};

export default withBaseRoute(ActivityRoute);
