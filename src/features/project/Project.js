import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects, selectProjects, selectProjectById } from "../projects/projectsSlice";
import { Icons } from "../icons/Icons";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import '../projects/projects.css';

export const Project = ({projectId, setText, setImageUrl}) => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const project = useSelector(state => selectProjectById(state, projectId));
    const [languagesTools, setLanguagesTools] = useState([]);
    const [readmeData, setReadmeData] = useState("");

    useEffect(() => {
        dispatch(loadProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projects.projects.length > 0 && project?.title) {
            setText(project.title);
            setImageUrl(project.imgHeader);
            const combined = project.languages.concat(project.tools);
            setLanguagesTools(combined);
        }
    }, [
        projects.projects.length,
        project?.title,
        project?.languages,
        project?.tools,
        setLanguagesTools,
        setText,
        setImageUrl,
        project?.imgHeader
    ]);

    useEffect(() => {
        const fetchReadmeData = async () => {
            if (project?.links.readme) {
                try {
                const response = await fetch(project.links.readme);
                const text = await response.text();
                const html = marked(text);
                const sanitizedHtml = DOMPurify.sanitize(html);
                setReadmeData(sanitizedHtml);
                } catch(error) {
                    console.error(error);
                }
            }
        }
        fetchReadmeData();
    }, [project?.links.readme])

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

    if (projects.projects.length === 0) {
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
        <section style={{
            display: "flex", 
            justifyContent: "center",
            marginBottom: "50px"
        }}>
            {projects.projects.length > 0 && (
                <div>
                    <h1 style={{textAlign: "center"}}>{project.title}</h1>
                    <div>
                        <p style={{textAlign: "center"}}>{project.description}</p>
                        {languagesTools.length > 0 &&
                        <div className="center-content" style={{marginTop: "50px"}}>
                            <Icons dataArray={languagesTools} />
                        </div>
                        }
                    </div>
                    <div className="center-content" style={{margin: "50px 0"}}>
                        <div style={{maxWidth: "500px"}}>
                            <p style={{textAlign: "justify"}}>{project.descriptionLong}</p>
                        </div>
                    </div>
                    
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
                        { readmeData &&
                        <div style={{marginTop: "100px"}}>
                            <h1 style={{textAlign: "center"}}>Project Readme</h1>
                            <div 
                                dangerouslySetInnerHTML={{__html: readmeData}}
                                style={{
                                    backgroundColor: "white", 
                                    padding: "15px", 
                                    borderRadius: "25px",
                                    boxShadow: "5px 10px 18px #888888"
                                }}
                            ></div>
                        </div>
                        }
                    </div>
            )}
        </section>
    );
};
