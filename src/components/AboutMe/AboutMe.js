import React from 'react';
import ProfileImg from "../../images/profilepic-circle.png";
import { descriptionData } from '../../data';

import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutMe-container">
            <div className="aboutMe-left">
                <h1 className="aboutMe-titleName">Hey, I'm Vincent.</h1>
                <p className="aboutMe-description-1">
                    {descriptionData.description['description-1']}
                </p>
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
            </div>
            <div className="aboutMe-right">
                <img src={ProfileImg} alt="profile-img" />
            </div>
        </div>
    )
}
