import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import "./Nav.css";

export default function Nav() {

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const [hamburgerMenuClose, setHamburgerMenuClose] = useState(false);

    const toggleHamburgerDropdown = () => {
        setHamburgerMenu(!hamburgerMenu);
    };

    const closeHamburgerMenu = () => {
        setHamburgerMenuClose(true);
        toggleHamburgerDropdown();
        setTimeout(function() {
            resetMenuDropdown();
        }, 1000);
    };

    const resetMenuDropdown = () => {
        setHamburgerMenuClose(false);
    }

    return (
        <motion.div 
            className="nav-container"
            animate={{
                opacity: [0, 1],
            }}
            transition={{ duration: 1.5 }}
        >
            <Fade top>
            <div className="nav_links">
                <ul className={hamburgerMenu && !hamburgerMenuClose ? "nav_links_list hamburgerLinks" : "nav_links_list"}>
                    <motion.li 
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        className="nav_link"
                        onClick={closeHamburgerMenu}
                    >  
                        <a href="#intro-container">HOME</a>
                    </motion.li>
                    <motion.li 
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        className="nav_link"
                        onClick={closeHamburgerMenu}
                    >  
                        <a href="#aboutMe-container">ABOUT</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeHamburgerMenu}
                    >
                        <a href="#skills-container">SKILLS</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeHamburgerMenu}
                    >
                        <a href="#experience-container">EXPERIENCE</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeHamburgerMenu}
                    >
                        <a href="#myProjects-container">PROJECTS</a>
                    </motion.li>
                    <motion.li 
                        className="nav_link"
                        whileHover={{ scale: 1.2, opacity: 0.75 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeHamburgerMenu}
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
            </Fade>
        </motion.div>
    )
}
