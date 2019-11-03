import Home from 'Routes/Home';
import Rondleidingen from 'Routes/Rondleidingen';
import Blog from 'Routes/Blog';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

const Routes = [
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
        path: '/blog/:id?',
        component: Blog
    },
    {
        path: '/redirect/:src',
        component: Redirect
    },
    {
        component: NotFound
    }
];

export default Routes;
