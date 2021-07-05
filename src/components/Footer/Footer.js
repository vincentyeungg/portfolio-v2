import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaRegEnvelope, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <ul className="ul-links">
                    <li className="ul-link">
                        <a href="mailto:vincentyeung0809@gmail.com" rel="noreferrer" >
                            <FaRegEnvelope className="link-icon" />
                        </a>
                    </li>
                    <li className="ul-link">
                        <a href="https://github.com/vincentyeungg" target="_blank" rel="noreferrer" >
                            <FaGithub className="link-icon" />
                        </a>
                    </li>
                    <li className="ul-link">
                        <a href="https://www.linkedin.com/in/vincent-yeung-b6228613b/" target="_blank" rel="noreferrer" >
                            <FaLinkedin className="link-icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-logo">
                © 2021 Vincent Yeung
            </div>
        </div>
    )
}
