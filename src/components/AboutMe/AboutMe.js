import React from 'react';
import ProfileImg from "../../images/profilepic-circle.png";
import { descriptionData } from '../../data';
import Fade from 'react-reveal/Fade';

import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutMe-container" id="aboutMe-container">
            <div className="aboutMe-left">
                <Fade top>
                    <h1 className="aboutMe-titleName">Hey, I'm Vincent.</h1>
                </Fade>
                <Fade left>
                    <p className="aboutMe-description-1">
                        {descriptionData.description['description-1']}
                    </p>
                </Fade>
                <Fade left >
                    <div className="aboutMe-descriptions">
                        <p className="aboutMe-description">
                            <strong>{descriptionData.description['description-2']}</strong>{descriptionData.description['description-3']}
                        </p>
                        <p className="aboutMe-description">
                            {descriptionData.description['description-4']}
                        </p>
                        <p className="aboutMe-description">
                            <strong>{descriptionData.description['description-5']}</strong>{descriptionData.description['dsecription-6']}
                        </p>
                    </div>
                </Fade>
            </div>
            <Fade right >
                <div className="aboutMe-right">
                    <img src={ProfileImg} alt="profile-img" />
                </div>
            </Fade>
        </div>
    )
}
