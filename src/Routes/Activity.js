import React from 'react';
import PropTypes from 'prop-types';
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

ActivityRoute.propTypes = {
    match: PropTypes.object.isRequired
};

export default withBaseRoute(ActivityRoute);
