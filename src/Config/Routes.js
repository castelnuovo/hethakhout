import Home from 'Routes/Home';
import ActivityList from 'Routes/ActivityList';
import Activity from 'Routes/Activity';
import Blog from 'Routes/Blog';
import Impressie from 'Routes/Impressie';
import Booking from 'Routes/Booking';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/shinrin-yoku',
        component: NotFound
    },
    {
        path: '/activiteiten',
        component: ActivityList
    },
    {
        path: '/activiteit/:category/:title',
        component: Activity
    },
    {
        path: '/blog/:id?',
        component: Blog
    },
    {
        path: '/impressie/:id?',
        component: Impressie
    },
    {
        path: '/boeking/:id',
        component: Booking
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
