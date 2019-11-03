import Home from 'Routes/Home';
import Rondleidingen from 'Routes/Rondleidingen';
import Blog from 'Routes/Blog';
import Booking from 'Routes/Booking';
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
        path: '/booking',
        component: Booking
    },
    {
        component: NotFound
    }
];

export default Routes;
