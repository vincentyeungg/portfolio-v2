import React from "react";
import {Carousel} from '3d-react-carousal';

import "./MyProject.css";

let id = 0;

function getId() {
    return id++;
}

export default function MyProject({
    title,
    description,
    demoLink,
    codeLink,
    techUsed,
    images
}) {

    let slides = [];

    if (images) {
        images.map(image => (
            slides.push(<img key={getId()} src={image} alt={image} />)
        ))
    }

    return (
        <div className="project-container">
            <div className="img-container">
                <div className="carousel">
                    {images && images.length > 0 &&
                        <Carousel slides={slides} autoplay={true} interval={2500}/>
                    }
                </div>
            </div>
            <div className="header">
                <h1>{title}</h1>
                <div className="info-btns">
                    {demoLink && demoLink.length > 0 && (
                        <form action={demoLink} target="_blank">
                            <input type="submit" value="DEMO" />
                        </form>
                    )}
                    <form action={codeLink} target="_blank">
                        <input type="submit" value="CODE" />
                    </form>
                </div>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="skills-section">
                {techUsed &&
                    techUsed.map((skill) => (
                        <div key={getId()} className="skill">
                            <p>{skill}</p>
                        </div>
                    ))}
            </div>
            <hr />
        </div>
    );
}
