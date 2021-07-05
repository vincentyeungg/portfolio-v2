import React from 'react';
import { motion } from 'framer-motion';

import "./Nav.css";

export default function Nav() {
    return (
        <div class="nav-container">
            <div className="nav_links">
                <ul className="nav_links_list">
                    <motion.li 
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        className="nav_link"
                    >  
                        <a href="#aboutMe-container">ABOUT</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                    >
                        <a href="#skills-container">SKILLS</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                    >
                        <a href="#experience-container">EXPERIENCE</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                    >
                        <a href="#myProjects-container">PROJECTS</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                    >
                        <a href="#contact-container">CONTACT ME</a>
                    </motion.li>
                </ul>
                <div className="nav-container__span">
                    <span className="navlink_bar"></span>
                    <span className="navlink_bar"></span>
                    <span className="navlink_bar"></span>
                </div>
            </div>
        </div>
    )
}
