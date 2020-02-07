import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';

const ActivityList = () => {
    return (
        <section className="section">
            <div className="container">
                <h1>Lijst met alle activiteiten</h1>
            </div>
        </section>
    );
};

export default withBaseRoute(ActivityList);
