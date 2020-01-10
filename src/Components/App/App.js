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

    @media screen and (max-width: 1023px) {
        .navbar-menu.is-active {
            padding-bottom: 5rem;
        }
    }

    @media screen and (max-width: 768px) {
        .hero-video {
            display: unset !important;
        }
    }

    .hero-video video {
        position: relative;
        left: auto;
        top: auto;
        transform: none;
        object-fit: cover;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const App = () => {
    // Save API data
    useLocalStorage(
        'blogData',
        'https://cms.hethakhout.nl/het-hak-hout/items/articles?fields=id,created_on,title,content,hero.data,summary&sort=-created_on'
    );

    useLocalStorage(
        'activityData',
        'https://cms.hethakhout.nl/het-hak-hout/items/activities?fields=id,title,description,category'
    );

    useLocalStorage(
        'fotoData',
        'https://cms.hethakhout.nl/het-hak-hout/items/fotos?fields=id,foto.data,description,created_on'
    );

    // TODO: create redirects in CMS
    // useLocalStorage(
    //     'redirectData',
    //     'https://cms.hethakhout.nl/het-hak-hout/items/redirects?fields=id,redirect_from,redirect_to'
    // );

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
