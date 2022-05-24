import React from 'react';
import { FaGithub, FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <Fade top>
                    <ul className="ul-links">
                        <motion.li 
                            className="ul-link"
                            whileHover={{ scale: 1.2, opacity: 0.75 }}
                            transition={{ duration: 0.25 }}
                        >
                            <a href="mailto:vincentyeung0809@gmail.com" rel="noreferrer" >
                                <FaRegEnvelope className="link-icon" />
                            </a>
                        </motion.li>
                        <motion.li 
                            className="ul-link"
                            whileHover={{ scale: 1.2, opacity: 0.75 }}
                            transition={{ duration: 0.25 }}
                        >
                            <a href="https://github.com/vincentyeungg" target="_blank" rel="noreferrer" >
                                <FaGithub className="link-icon" />
                            </a>
                        </motion.li>
                        <motion.li 
                            className="ul-link"
                            whileHover={{ scale: 1.2, opacity: 0.75 }}
                            transition={{ duration: 0.25 }}
                        >
                            <a href="https://www.linkedin.com/in/vincent-yeung-b6228613b/" target="_blank" rel="noreferrer" >
                                <FaLinkedin className="link-icon" />
                            </a>
                        </motion.li>
                    </ul>
                </Fade>
            </div>
            <Fade bottom>
                <div className="footer-logo">
                    © 2022 Vincent Yeung
                </div>
            </Fade>
        </div>
    )
}
