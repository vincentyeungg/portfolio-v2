import React from "react";
import MyProject from "./MyProject/MyProject";
import { descriptionData } from "../../data";
import { projectImages } from "../../imagePaths/PickADateImagePaths";

import "./MyProjects.css";

export default function MyProjects() {

    return (
        <div className="myProjects-container">
            {descriptionData.projects.map((project, index) => (
                <MyProject
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    images={projectImages[index]}
                    techUsed={project.techUsed}
                    codeLink={project.codeLink}
                    demoLink={project.demoLink}
                />
            ))}
        </div>
    );
}
