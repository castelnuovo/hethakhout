import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './register-service-worker';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import App from './Components/App';
import Home from './Routes/Home';
import Rondleidingen from './Routes/Rondleidingen';
import NotFound from './Routes/NotFound';

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/rondleidingen/:id',
                component: Rondleidingen,
                routes: [
                    {
                        path: '/rondleidingen/:id/test',
                        component: Rondleidingen
                    }
                ]
            },
            {
                component: NotFound
            }
        ]
    }
];

ReactDOM.render(
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
    document.getElementById('root')
);

unregister();
