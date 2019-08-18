import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './register-service-worker';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Config/Routes';

ReactDOM.render(
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>,
    document.getElementById('root')
);

unregister();
