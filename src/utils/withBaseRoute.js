import React from 'react';
import { renderRoutes } from 'react-router-config';

const withBaseRoute = PassedComponent => {
    return class extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <PassedComponent {...this.props} />
                    {renderRoutes(this.props.route.routes)}
                </React.Fragment>
            );
        }
    };
};

export default withBaseRoute;
