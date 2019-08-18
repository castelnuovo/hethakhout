import App from '../Components/App';
import Home from '../Routes/Home';
import Rondleidingen from '../Routes/Rondleidingen';
import Blog from '../Routes/Blog';
import NotFound from '../Routes/NotFound';

const Routes = [
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
                path: '/blog/:slug?',
                component: Blog
            },
            {
                component: NotFound
            }
        ]
    }
];

export default Routes;
