import React from 'react';
import Hero from '../../components/hero';
import { Projects } from '../../features/projects/Projects';

const ProjectsPage = () => {

    return (
        <main className="page">
            <Hero
                displayText="Projects"
                type="projects"
            />
            <div className="text-container">
                <h3>Here you can find projects I've worked on</h3>
            </div>
            <Projects />
        </main>
    );
};

export default ProjectsPage;