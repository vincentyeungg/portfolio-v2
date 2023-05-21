import React from 'react';
import Background from "../../assets/imagePaths";
import SkillIcon from '../SkillsIcons/SkillIcon';
import descriptionData from "../../assets/data";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

import "./Skills.css";

export default function Skills() {
    return (
        <div className="skills-container" id="skills-container" >
            <img src={Background.skills} alt="background-img" />
            <div className="skills__flex-container">
                <Fade top >
                    <div className="flex-row_1">
                        <h1>Skills</h1>
                        <hr />
                    </div>
                </Fade>
                <div className="flex-row_2">
                    <div className="flex-col_1">
                        <div className="col_title">
                            <Fade left >
                                <FontAwesomeIcon className="dev-icon" icon={faCog} size="3x" />
                                <h2>Development</h2>
                            </Fade>
                        </div>
                        <div className="skills-icons">
                            <Fade left>
                                {descriptionData.skills.map(skill => (
                                    <SkillIcon key={skill.id} Skill={skill.skill} />
                                ))}
                            </Fade>
                        </div>
                    </div>
                    <div className="flex-col_2">
                        <div className="col_title">
                            <Fade right>
                                <FontAwesomeIcon className="dev-icon" icon={faTools} size="3x" />
                                <h2>Tools</h2>
                            </Fade>
                        </div>
                        <div className="tools-list">
                            <Fade right>
                                <ul>
                                    {descriptionData.tools.map(tool => (
                                        <li key={tool.id}>{tool.tool}</li>
                                    ))}
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
