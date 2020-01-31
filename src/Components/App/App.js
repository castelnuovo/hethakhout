import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled, { createGlobalStyle } from 'styled-components';
import Favicon from 'react-favicon';
import Routes from 'Config/Routes';
import useLocalStorage from 'Utils/useLocalStorage';
import ScrollToTop from 'Utils/ScrollToTop';
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
`;

const StyledDiv = styled.div`
    flex: 1;
`;

const App = () => {
    useLocalStorage(
        'blogData',
        'https://hethakhout.nl/cms/articles?fields=id,created_on,title,content,hero.data,summary&sort=-created_on'
    );

    useLocalStorage(
        'activityData',
        'https://hethakhout.nl/cms/activities?fields=id,title,description,category,options'
    );

    useLocalStorage(
        'optionsData',
        'https://hethakhout.nl/cms/activityoptions?fields=hero.data,title,description'
    );

    useLocalStorage(
        'fotoData',
        'https://hethakhout.nl/cms/fotos?fields=id,foto.data,title,description,created_on'
    );

    useLocalStorage(
        'redirectData',
        'https://hethakhout.nl/cms/redirects?fields=id,redirect_from,redirect_to'
    );

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <GlobalStyles />
            <Favicon url={Logo} />
            <NavBar />
            <StyledDiv className="App">{renderRoutes(Routes)}</StyledDiv>
            <Footer />
        </Router>
    );
};

export default App;
