import React from 'react';

import introImg from "../../images/intro-img.jpg";

import "./Intro.css";

export default function Intro() {
    return (
        <div className="intro-container">
            <img src={introImg} alt="intro-background-img" />
        </div>
    )
}
