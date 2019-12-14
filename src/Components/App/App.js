import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createGlobalStyle } from 'styled-components';
import Favicon from 'react-favicon';
import Routes from 'Config/Routes';
import useLocalStorage from 'Utils/useLocalStorage';
import './App.scss';

import Logo from 'Config/Logo';
import NavBar from 'Components/NavBar';
import Footer from 'Components/Footer';

const GlobalStyles = createGlobalStyle`
    html {
        overscroll-behavior: none;
    }

    #root {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    
    .App {
        flex: 1;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1023px) {
        .navbar-menu.is-active {
            padding-bottom: 5rem;
        }
    }
`;

const App = () => {
    // Save API data
    useLocalStorage(
        'blogData',
        'https://cms.hethakhout.nl/het-hak-hout/items/articles'
    );

    useLocalStorage(
        'activityData',
        'https://cms.hethakhout.nl/het-hak-hout/items/activities'
    );

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <GlobalStyles />
            <Favicon url={Logo} />
            <NavBar />
            <div className="App">{renderRoutes(Routes)}</div>
            <Footer />
        </Router>
    );
};

export default App;
