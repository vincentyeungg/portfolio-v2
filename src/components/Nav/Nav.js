import React, { useState } from 'react';
import { motion } from 'framer-motion';

import "./Nav.css";

export default function Nav() {

    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const toggleHamburgerDropdown = () => {
        setHamburgerMenu(!hamburgerMenu);
    };

    return (
        <div className="nav-container">
            <div className="nav_links">
                <ul className={hamburgerMenu ? "nav_links_list hamburgerLinks" : "nav_links_list"}>
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
                <motion.div 
                    className="nav-container__span"
                    whileHover={{ scale: 1.2, duration: 0.25 }}
                    onClick={toggleHamburgerDropdown} 
                >
                    <span className="navlink_bar"></span>
                    <span className="navlink_bar"></span>
                    <span className="navlink_bar"></span>
                </motion.div>
            </div>
        </div>
    )
}
