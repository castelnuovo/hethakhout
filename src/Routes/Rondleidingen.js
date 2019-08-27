import React from 'react';
import PropTypes from 'prop-types';
import withBaseRoute from 'Utils/withBaseRoute';

const Rondleidingen = ({ match }) => {
    return (
        <section className="section">
            <div className="container">
                <h1>About Page</h1>
                <h2>ID: {match.params.id}</h2>
            </div>
        </section>
    );
};

Rondleidingen.propTypes = {
    match: PropTypes.object.isRequired
};

export default withBaseRoute(Rondleidingen);
