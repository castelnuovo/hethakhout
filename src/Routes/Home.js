import React from 'react';
import withBaseRoute from 'Utils/withBaseRoute';
import Hero from 'Components/Hero';
import BlogWidget from 'Components/Blog/BlogWidget';
import AboutMe from 'Components/AboutMe';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <BlogWidget />
        </>
    );
};

export default withBaseRoute(Home);
