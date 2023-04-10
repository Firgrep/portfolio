import React from 'react';
import Hero from '../../components/hero';
import { Projects } from '../../features/projects/Projects';
import { Icon } from '../../features/icon/Icon';

const Home = () => {

    return (
        <main className="page">
            <Hero />
            <p>Test test test</p>
            <div style={{display: "flex", margin: "200px"}}>
                <Icon icon="Redux" />
                <Icon icon="react" />
                <Icon icon="javascript" />
                <Icon icon="python" />
                <Icon icon="django" />
                <Icon icon="matplotlib" />
                <Icon icon="html" />
                <Icon icon="css" />
                <Icon icon="jsPdf" />
            </div>
            
            <Projects />
        </main>
    );
};

export default Home;
