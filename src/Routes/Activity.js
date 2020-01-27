import React from 'react';
import { useParams } from 'react-router';
import withBaseRoute from 'Utils/withBaseRoute';
import ActivityContainer from 'Components/Activity';

const Activity = () => {
    const { category, title } = useParams();

    return (
        <section className="section">
            <div className="container">
                <ActivityContainer category={category} title={title} />
            </div>
        </section>
    );
};

export default withBaseRoute(Activity);
