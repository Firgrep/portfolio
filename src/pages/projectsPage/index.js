import React from 'react';
import Hero from '../../components/hero';
import { Projects } from '../../features/projects/Projects';

const ProjectsPage = () => {

    return (
        <>
            <Hero
                displayText="Projects"
                type="projects"
            />
            <main className="container">
                <div className="text-container" style={{marginBottom: "50px"}}>
                    <h2>Building Apps</h2>
                    <p>Please find below a selection of personal projects I've worked on.</p>
                </div>
                <Projects />
            </main>
        </>
    );
};

export default ProjectsPage;
