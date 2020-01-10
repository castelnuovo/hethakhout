import Home from 'Routes/Home';
import Activity from 'Routes/Activity';
import Blog from 'Routes/Blog';
import Fotos from 'Routes/Fotos';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

import Booking from 'Routes/Booking';
import ContactInfo from 'Components/Booking/BookingContactInfo';
import Extras from 'Components/Booking/BookingExtras';
import Success from 'Components/Booking/BookingSuccess';

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
        path: '/activiteiten/:category/:title',
        component: Activity
    },
    {
        path: '/blog/:id?',
        component: Blog
    },
    {
        path: '/fotos/:id?',
        component: Fotos
    },

    // WIP
    {
        path: '/booking/:id?',
        component: Booking
    },
    {
        path: '/booking_contactinfo',
        component: ContactInfo
    },
    {
        path: '/booking_extras',
        component: Extras
    },
    {
        path: '/booking_success',
        component: Success
    },
    // END WIP

    {
        path: '/redirect/:src',
        component: Redirect
    },
    {
        component: NotFound
    }
];

export default Routes;
