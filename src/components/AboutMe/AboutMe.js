import React from 'react';
import ProfileImg from "../../assets/imagePaths";
import descriptionData from "../../assets/data";
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
                        {descriptionData.aboutMe['description-1']}
                    </p>
                </Fade>
                <Fade left >
                    <div className="aboutMe-descriptions">
                        <p className="aboutMe-description">
                            <strong>{descriptionData.aboutMe['description-2']}</strong>{descriptionData.aboutMe['description-3']}
                        </p>
                        <p className="aboutMe-description">
                            {descriptionData.aboutMe['description-4']}
                        </p>
                    </div>
                </Fade>
            </div>
            <Fade right >
                <div className="aboutMe-right">
                    <img src={ProfileImg.aboutme} alt="profile-img" />
                </div>
            </Fade>
        </div>
    )
}
