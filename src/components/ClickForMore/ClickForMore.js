import React from 'react';
import { motion } from 'framer-motion';
import Resume from "../../assets/resume-vincent.pdf";

import "./ClickForMore.css";

export default function ClickForMore({ category }) {
    return (
        <div className="more-container">
            <div className="more-container__title">
                {category === "github" && (
                    <a href="https://github.com/vincentyeungg" target="_blank" rel="noreferrer" >
                        <motion.button 
                            className="button-title"
                            whileHover={{ scale: 0.75, opacity: 0.5 }}
                            transition={{ duration: 0.25 }}
                        >
                            VIEW MORE PROJECTS
                        </motion.button>
                    </a>
                )}
                {category === "resume" && (
                    <a href={Resume} target="_blank" rel="noreferrer" >
                        <motion.button 
                            className="button-title"
                            whileHover={{ scale: 0.75, opacity: 0.5 }}
                            transition={{ duration: 0.25 }}
                        >
                            VIEW MY RESUME
                        </motion.button>
                    </a>
                )}
            </div>
        </div>
    )
}
