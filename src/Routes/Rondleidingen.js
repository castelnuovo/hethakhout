import React from 'react';
import withBaseRoute from '../Utils/withBaseRoute';

const Rondleidingen = props => {
    const { match } = props;
    return (
        <section className="section">
            <div className="container">
                <h1>About Page</h1>
                <h2>ID: {match.params.id}</h2>
            </div>
        </section>
    );
};

export default withBaseRoute(Rondleidingen);
