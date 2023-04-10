import React from 'react';
import Hero from '../../components/hero';
import { Projects } from '../../features/projects/Projects';
import { Icon } from '../../features/icon/Icon';

const Home = () => {

    return (
        <main className="page">
            <Hero />
            <p>Test test test</p>
            <div style={{display: "flex", margin: "200px", flexWrap: "wrap"}}>
                <Icon icon="Redux" />
                <Icon icon="react" />
                <Icon icon="javascript" />
                <Icon icon="python" />
                <Icon icon="django" />
                <Icon icon="matplotlib" />
                <Icon icon="html" />
                <Icon icon="css" />
                <Icon icon="jsPdf" />
                <Icon icon="bootstrap" />
                <Icon icon="cplusplus" />
                <Icon icon="pandas" />
                <Icon icon="git" />
                <Icon icon="numpy" />
                <Icon icon="github" />
                <Icon icon="linkedin" />
                <Icon icon="chartjs" />
            </div>
            
            <Projects />
        </main>
    );
};

export default Home;
