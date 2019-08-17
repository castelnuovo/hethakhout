import React from 'react';
import { renderRoutes } from 'react-router-config';
import './App.scss';

import Navbar from '../Navbar';
import Footer from '../Footer';

const removePreLoader = () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader--hide');
};

const App = props => {
    const { route } = props;

    removePreLoader();

    return (
        <div className="App">
            <Navbar />
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
};

export default App;
