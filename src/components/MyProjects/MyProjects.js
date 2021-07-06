import React from "react";
import MyProject from "./MyProject/MyProject";
import { descriptionData } from "../../assets/data";
import { project_Images } from "../../imagePaths";

import "./MyProjects.css";

export default function MyProjects() {

    return (
        <div className="myProjects-container" id="myProjects-container" >
            <div className="myProjects__title">
                <h1>Some of the projects I've worked on</h1>
            </div>
            <hr className="project-divider" />
            {descriptionData.projects.map((project, index) => (
                <MyProject
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    images={project_Images[index]}
                    techUsed={project.techUsed}
                    codeLink={project.codeLink}
                    demoLink={project.demoLink}
                />
            ))}
        </div>
    );
}
