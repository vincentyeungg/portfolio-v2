import React from 'react';
import Background from "../../images/skills-background.jpg";
import SkillIcon from '../SkillsIcons/SkillIcon';
import { descriptionData } from '../../data';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Skills.css";

export default function Skills() {
    return (
        <div className="skills-container" id="skills-container" >
            <img src={Background} alt="background-img" />
            <div className="skills__flex-container">
                <div className="flex-row_1">
                    <h1>Skills</h1>
                    <hr />
                </div>
                <div className="flex-row_2">
                    <div className="flex-col_1">
                        <div className="col_title">
                            <FontAwesomeIcon className="dev-icon" icon={faCog} size="3x" />
                            <h2>Development</h2>
                        </div>
                        <div className="skills-icons">
                            {descriptionData.skills.map(skill => (
                                <SkillIcon key={skill.id} Skill={skill.skill} />
                            ))}
                        </div>
                    </div>
                    <div className="flex-col_2">
                        <div className="col_title">
                            <FontAwesomeIcon className="dev-icon" icon={faTools} size="3x" />
                            <h2>Tools</h2>
                        </div>
                        <div className="tools-list">
                            <ul>
                                {descriptionData.tools.map(tool => (
                                    <li key={tool.id}>{tool.tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
