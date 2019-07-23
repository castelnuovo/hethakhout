import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Navbar from './Navbar';
// import Footer from './Footer';

import Home from '../Routes/Home';
// import About from '../Routes/About';

const removePreLoader = () => {
    const preloader = document.querySelector('#preloader');
    preloader.classList.add('loaded');
    setTimeout(() => {
        preloader.outerHTML = '';
    }, 100);
};

class App extends Component {
    componentDidMount() {
        removePreLoader();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/* <Navbar /> */}
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/about" component={About} /> */}
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
