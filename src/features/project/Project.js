import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects, selectProjects, selectProjectById } from "../projects/projectsSlice";

export const Project = ({projectId, setText, setImageUrl}) => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const project = useSelector(state => selectProjectById(state, projectId));

    useEffect(() => {
        dispatch(loadProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projects.length > 0) {
            setText(project.title);
            setImageUrl(project.imgHeader);
        }
    }, [
        projects.length,
        project.title,
        setText,
        setImageUrl,
        project.imgHeader
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

    return (
        <section>
            {projects.length > 0 && (
                <div>
                    <p>test {project.title}</p>
                    <p>test {project.description}</p>
                </div>
            )}
        </section>
    );
};
