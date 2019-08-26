import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import './App.scss';

import Navbar from '../Navbar';
// import Footer from '../Footer';

const App = ({ route }) => {
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

App.propTypes = {
    route: PropTypes.object.isRequired
};

export default App;
