import { selectProjects } from "./projectsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadProjects } from "./projectsSlice";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'

export const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);

    useEffect(() => {
        dispatch(loadProjects());
    }, [dispatch]);

    if (projects.isLoading === true) {
        return(
            <h2>Loading ... </h2>
        )
    }

    if (projects.hasError === true) {
        return(
            <h2>Error in projects data!</h2>
        )
    }

    console.log(projects);
    return (
        <section>
            <div className="grid">
                {Object.values(projects).map((project) => (
                    
                    <article key={project.id} className="project-container">
                        <div className="project-image-container">
                            <img
                                className="project-image"
                                src={
                                    project.imgHeader || 'projects.jpg'
                                }
                                alt=""
                            />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Languages: {project.languages}</p>
                        <p>Tools: {project.tools}</p>
                        <Link 
                            to={project.links.src}
                            target="_blank"
                        >
                            Source Code
                        </Link>
                        <br></br>
                        <Link 
                            to={project.links.live}
                            target="_blank"
                        >
                            Live Link
                        </Link>
                        



                    </article>
                    
                ))}
            </div>
        </section>
    );
}