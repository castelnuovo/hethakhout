import React from 'react';
import withBaseRoute from '../Utils/withBaseRoute';
import Hero from '../Components/Hero';

const Home = props => {
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
                        laudantium, maiores voluptatum nulla at id labore sequi.
                        Numquam, vitae architecto.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default withBaseRoute(Home);
