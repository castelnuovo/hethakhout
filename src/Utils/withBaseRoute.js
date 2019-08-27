import React from 'react';
import { renderRoutes } from 'react-router-config';

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

export default withBaseRoute;
