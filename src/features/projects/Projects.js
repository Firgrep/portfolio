import { selectProjects } from "./projectsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadProjects } from "./projectsSlice";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from "../icons/Icons";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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

    if (projects.projects === undefined) {
            return(
                <h2>No projects found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
            )
        }

    if (projects.projects.length === 0) {
        return(
            <h2>No projects found!</h2>
        )
    }

    return (
        <section>
            {projects.projects.length > 0 &&
            projects.projects.map((project) => (
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
                    <div className="project-content-container">
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="site-link"
                        >
                            <h2 style={{paddingTop: "10px"}}>{project.title}</h2>
                        </Link>
                        <div className="project-content-container-sub">
                            <div>
                                <p>{project.description}</p>

                                {project.languages &&
                                <div>
                                    <span>Languages:</span><Icons dataArray={project.languages} />
                                </div>}

                                {project.tools &&
                                <div>
                                    <span>Tools:</span><Icons dataArray={project.tools} />
                                </div>}
                                
                                <div className="project-links-container-outer">
                                    <div className="project-links-container">
                                        <Link
                                            key={project.id}
                                            to={`/project/${project.id}`}
                                            className="site-link"
                                        >
                                            <Button variant="outlined">Learn More</Button>
                                        </Link>

                                        {project.links.src &&
                                        <Link 
                                            to={project.links.src}
                                            target="_blank"
                                            className="site-link"
                                        >
                                            <Button 
                                                variant="contained"
                                                endIcon={<OpenInNewIcon />}
                                            >
                                                Source Code
                                            </Button>
                                        </Link>
                                        }

                                        {project.links.live &&
                                        <Link 
                                            to={project.links.live}
                                            target="_blank"
                                            className="site-link"
                                        >
                                            <Button 
                                                variant="contained"
                                                color="secondary"
                                                endIcon={<OpenInNewIcon />}
                                            >
                                                Live
                                            </Button>
                                        </Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
