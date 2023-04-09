import React, { useState } from 'react';
import Hero from '../../components/hero';
import { useParams } from 'react-router-dom';
import { Project } from '../../features/project/Project';

const ProjectDetailsPage = () => {
    const [text, setText] = useState("Individual Project");
    const [imageUrl, setImageUrl] = useState(null);
    const { project } = useParams();
    const projectId = Number(project);

    return (
        <main className="page">
            <Hero 
                displayText={text}
                type="project"
                image={imageUrl}
            />
            <Project
                projectId={projectId}
                setText={setText}
                setImageUrl={setImageUrl}
            />
        </main>
    );
};

export default ProjectDetailsPage;