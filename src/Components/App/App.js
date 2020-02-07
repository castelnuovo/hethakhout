import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';
import Favicon from 'react-favicon';
import Routes from 'Config/Routes';
import useAPI from 'Utils/useAPI';
import ScrollToTop from 'Utils/ScrollToTop';
import './App.scss';

import { Logo } from 'Config/Brand';
import NavBar from 'Components/NavBar';
import Footer from 'Components/Footer';

// Sticky footer style
const StyledDiv = styled.div`
    flex: 1;
`;

const App = () => {
    useAPI();

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Favicon url={Logo} />
            <NavBar />
            <StyledDiv className="App">{renderRoutes(Routes)}</StyledDiv>
            <Footer />
        </Router>
    );
};

export default App;
