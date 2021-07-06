import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleDoubleDown } from "react-icons/fa";

import introImg from "../../images/intro-2.jpg";

import "./Intro.css";

const containerVariants = {
    onStart: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    },
    textPopup: {
        initialTitle: {
            y: 50,
            opacity: 0
        },
        endTitle: {
            y: -20,
            opacity: 1
        },
        initialSub: {
            y: -50,
            opacity: 0
        },
        endSub: {
            y: 20,
            opacity: 1
        },
    },
}

export default function Intro() {
    return (
        <motion.div 
            className="intro-container" 
            id="intro-container"
            variants={containerVariants.onStart}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
        >
            <img src={introImg} alt="intro-background-img" />
            <div className="intro-text-container">
                <motion.h2 
                    className="intro-text font-playfair"
                    variants={containerVariants.textPopup}
                    initial="initialTitle"
                    animate="endTitle"
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    Vincent Yeung
                </motion.h2>
                <div className="intro-container-horizontal">
                    <motion.hr 
                        className="horizontal-hr-left"
                        animate={{
                            opacity: [0, 1, 0],
                            width: ['0vw', '20vw', '0vw'],
                        }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                    <motion.hr 
                        className="horizontal-hr-right"
                        animate={{
                            opacity: [0, 1, 0],
                            width: ['0vw', '20vw', '0vw'],
                        }}
                        transition={{ delay: 1, duration: 1.5 }}
                    />
                </div>
                <div className="intro-text-p">
                    <motion.p
                        className="intro-text font-mont"
                        variants={containerVariants.textPopup}
                        initial="initialSub"
                        animate="endSub"
                    transition={{ delay: 1, duration: 1.5 }}
                    >
                        Aspiring Software Engineer
                    </motion.p>
                </div>
            </div>
            <motion.div 
                className="click-more"
                whileHover={{ scale: 1.2, duration: 0.25 }}
            >
                <a className="view-more" href="#aboutMe-container">
                    <p>VIEW MORE</p>
                    <FaAngleDoubleDown className="link-icon" />
                </a>
            </motion.div>
        </motion.div>
    )
}
