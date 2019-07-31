import React from 'react';

const About = ({ match }) => {
    return (
        <div className="container">
            <p>ID: {match.params.id}</p>
        </div>
    );
};

export default About;
