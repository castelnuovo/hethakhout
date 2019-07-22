import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        // Remove preloader
        const preloader = document.querySelector('#preloader');
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.outerHTML = '';
        }, 100);
    }

    render() {
        return (
            <div className="App">
                <h1>Het Hak Hout</h1>
            </div>
        );
    }
}

export default App;
