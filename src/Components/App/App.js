import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from 'Config/Routes';

import './App.scss';

import NavBar from 'Components/Navbar';
import Footer from 'Components/Footer';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <NavBar />
            {renderRoutes(Routes)}
            <Footer />
        </Router>
    );
};

export default App;
