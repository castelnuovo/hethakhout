import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

const withBaseRoute = PassedComponent => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <PassedComponent {...this.props} />
                    {renderRoutes(this.props.route.routes)}
                </>
            );
        }
    };
};

withBaseRoute.propTypes = {
    PassedComponent: PropTypes.node.isRequired
};

export default withBaseRoute;
