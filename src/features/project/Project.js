import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects, selectProjects, selectProjectById } from "../projects/projectsSlice";
import { Icons } from "../icons/Icons";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../projects/projects.css';

export const Project = ({projectId, setText, setImageUrl}) => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const project = useSelector(state => selectProjectById(state, projectId));
    const [languagesTools, setLanguagesTools] = useState([]);

    useEffect(() => {
        dispatch(loadProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projects.length > 0 && project?.title) {
            setText(project.title);
            setImageUrl(project.imgHeader);
            const combined = project.languages.concat(project.tools);
            setLanguagesTools(combined);
        }
    }, [
        projects.length,
        project?.title,
        project?.languages,
        project?.tools,
        setLanguagesTools,
        setText,
        setImageUrl,
        project?.imgHeader
    ]);

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

    if (projects.length === 0) {
        return(
            <h2>No projects found!</h2>
        )
    }

    if (project === undefined) {
        return(
            <h2>No projects found!</h2>
        )
    }

    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            {projects.length > 0 && (
                <div>
                    <h1 style={{display: "flex"}}>{project.title}</h1>
                    <p>{project.description}</p>
                    {languagesTools.length > 0 &&
                        <div>
                            <Icons dataArray={languagesTools} />
                        </div>}
                    <p>{project.descriptionLong}</p>
                    <div className="project-links-container-outer">
                        <div className="project-links-container">
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
            )}
        </section>
    );
};
