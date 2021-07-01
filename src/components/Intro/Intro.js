import React from 'react';
import { motion } from 'framer-motion';

import introImg from "../../images/intro-img.jpg";

import "./Intro.css";

export default function Intro() {
    return (
        <motion.div 
            className="intro-container" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <img src={introImg} alt="intro-background-img" />
            <div className="intro-text-container">
                <motion.h2 
                    className="intro-text font-playfair"
                    animate={{
                        y: [50, -20],
                        opacity: [0, 1]
                    }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    Vincent Yeung
                </motion.h2>
                <div className="intro-container-horizontal">
                    <motion.hr 
                        className="horizontal-hr-left"
                        animate={{
                            width: ['0vw', '20vw', '0vw'],
                        }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                    <motion.hr 
                        className="horizontal-hr-right"
                        animate={{
                            width: ['0vw', '20vw', '0vw'],
                        }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                </div>
                <div className="intro-text-p">
                    <motion.p
                        className="intro-text font-mont"
                        animate={{
                            y: [-50, 20],
                            opacity: [0, 1]
                        }}
                    transition={{ delay: 1, duration: 1.5 }}
                    >
                        Aspiring Software Engineer
                    </motion.p>
                </div>
            </div>
        </motion.div>
    )
}
