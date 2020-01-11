import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import Activity from 'Components/Activity';

const ActivityRoute = () => {
    const { category, title } = useParams();

    return (
        <section className="section">
            <div className="container">
                <Activity category={category} title={title} />
            </div>
        </section>
    );
};

export default withBaseRoute(ActivityRoute);
