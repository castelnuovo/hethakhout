import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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

class App extends Component {
    componentDidMount() {
        removePreLoader();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/rondleidingen" component={About} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
