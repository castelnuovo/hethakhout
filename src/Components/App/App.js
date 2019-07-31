import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Navbar from '../Navbar';
import Footer from '../Footer';

// TODO: place this in an seperate router component
import Home from '../../Routes/Home';
import About from '../../Routes/About';

// Impor Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const removePreLoader = () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader--hide');
};

// const routes = [
//     { path: '/', exact: true, component: Home },
//     { path: '/tour/:id', exact: true, component: About }
// ];

class App extends Component {
    componentDidMount() {
        removePreLoader();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    {/* {routes.map(route => (
                        <Route
                            key={route.path}
                            route={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))} */}
                    <Route path="/" component={Home} exact />
                    <Route path="/tour/:id" component={About} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
