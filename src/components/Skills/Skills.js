import React from 'react';
import Background from "../../images/skills-background.jpg";

import "./Skills.css";

export default function Skills() {
    return (
        <div className="skills-container">
            <img src={Background} alt="background-img" />
            <div className="skills__flex-container">
                <div className="flex-row_1">
                    <h1>Skills</h1>
                    <hr />
                </div>
                <div className="flex-row_2">
                    <div className="flex-col_1">
                        hi
                    </div>
                    <div className="flex-col_2">
                        bye
                    </div>
                </div>
            </div>
        </div>
    )
}
