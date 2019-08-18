import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.scss';

import Navbar from '../Navbar';
// import Footer from '../Footer';

const App = props => {
    const { route } = props;

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <div className="App">
            <Navbar />
            {renderRoutes(route.routes)}
            {/* <Footer /> */}
        </div>
    );
};

export default App;
