import React from 'react';
import { motion } from 'framer-motion';

import "./SkillIcon.css";

export default function SkillIcon({ Skill }) {
    return (
        <motion.div 
            className="circular-icon"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.25 }}
        >
            <p>{Skill}</p>
        </motion.div>
    )
}
