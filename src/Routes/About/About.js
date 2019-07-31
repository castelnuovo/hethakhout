import React from 'react';

const About = ({ match }) => {
    return (
        <section className="section">
            <div className="container">
                <h1>About Page</h1>
                <h2>ID: {match.params.id}</h2>
            </div>
        </section>
    );
};

export default About;
