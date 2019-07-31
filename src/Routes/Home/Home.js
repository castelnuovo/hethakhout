import React, { Component } from 'react';
import Hero from '../../Components/Hero';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                {/* <BlogWidget /> */}
                {/* <Contact /> */}

                <section className="section">
                    <div className="container">
                        <h1>Home Page</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Deserunt voluptates tempore doloribus
                            reprehenderit aut facere sapiente saepe ut nemo
                            laudantium, maiores voluptatum nulla at id labore
                            sequi. Numquam, vitae architecto.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
