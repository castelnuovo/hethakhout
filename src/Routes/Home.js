import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero';
import BlogWidget from 'Components/Blog/BlogWidget';

const Home = () => {
    return (
        <>
            <Hero />

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

            <BlogWidget />
            {/* <Contact /> */}
        </>
    );
};

export default withBaseRoute(Home);
