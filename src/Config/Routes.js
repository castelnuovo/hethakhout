import Home from 'Routes/Home';
import Blog from 'Routes/Blog';
import Redirect from 'Routes/Redirect';
import Activity from 'Routes/Activity';
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
        path: '/blog/:id?',
        component: Blog
    },
    {
        path: '/redirect/:src',
        component: Redirect
    },
    {
        path: '/booking',
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
    {
        path: '/activiteiten/wandelingen/lang',
        component: Activity
    },
    {
        component: NotFound
    }
];

export default Routes;
