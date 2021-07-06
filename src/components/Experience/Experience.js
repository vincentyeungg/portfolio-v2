import React from 'react';
import ExperienceImg from "../../images/experience-img.jpg";
import { descriptionData } from '../../data';
import Fade from 'react-reveal/Fade';

import "./Experience.css";

export default function Experience() {
    return (
        descriptionData && descriptionData.experiences.map((experience) => (
            <div key={experience.id} className="experience-container" id="experience-container" >
                <img src={ExperienceImg} alt="background-img" />
                <div className="experience-section1">
                    <h1 className="experience-sectionTitle">Experience</h1>
                    <hr className="title-divider" />
                </div>
                <div className="experience-flex__container">
                    <div className="experience-flex__left">
                        <Fade bottom>
                            <div className="left_info">
                                <h2 className="experience-title">{experience.position} @ {experience.company}</h2>
                                <h4 className="experience-location">{experience.location}</h4>
                                <p className="experience-description">{experience.description}</p>
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className="experience-flex__right">
                            <h4 className="experience-duration">{experience.duration}</h4>
                        </div>
                    </Fade>
                </div>
            </div>
        ))
    )
}
