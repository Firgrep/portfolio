import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero';

const ProjectDetailsPage = () => {
    // const [data, setData] = useState();

    return (
        <main className="page">
            <Hero
                displayText="Projects"
                type="projects"
            />
            <p>project here to come</p>
        </main>
    );
};

export default ProjectDetailsPage;