import React from 'react';
import Hero from '../../components/hero';
import { Projects } from '../../features/projects/Projects';

const Home = () => {

    return (
        <main className="page">
            <Hero />
            <p>Test test test</p>
            <Projects />
        </main>
    );
};

export default Home;