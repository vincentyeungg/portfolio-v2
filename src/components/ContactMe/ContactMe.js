import React, { useState } from 'react';
import ContactMeImg from "../../assets/imagePaths";
import { motion } from "framer-motion";
import axios from 'axios';
import Fade from 'react-reveal/Fade';

import "./ContactMe.css";

export default function ContactMe() {

    const [contactInfoData, setContactInfoData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        sent: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_EMAIL_SERVICE}/send-email`, contactInfoData);
        setContactInfoData({ 
            ...contactInfoData, 
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: true
        });
    }

    return (
        <div className="contact-container" id="contact-container">
            <img className="contact-container__img" src={ContactMeImg.contactme} alt="contact-me" />
            <div className="contact-container__form">
                <Fade top>
                    <div className="contact-header">
                        <h2>Get In Touch</h2>
                    </div>
                    <hr className="contact-divider" />
                </Fade>
                <Fade bottom>
                    <div className="contact-subHeader">
                        <p>Interested in working with me or just want to say hi?</p>
                        <p>Feel free to send me a message!</p>
                    </div>
                </Fade>
                <div className="contact-form">
                    <form autoComplete="off" onSubmit={handleSubmit} >
                        <Fade bottom>
                            <div className="contact-form__inputs">
                                <label>NAME</label>
                                <input 
                                    name="name" 
                                    type="text" 
                                    required 
                                    value={contactInfoData.name}
                                    onChange={(event) => setContactInfoData({ ...contactInfoData, name: event.target.value })}
                                />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="contact-form__inputs">
                                <label>EMAIL</label>
                                <input 
                                    name="email" 
                                    type="email" 
                                    required
                                    value={contactInfoData.email}
                                    onChange={(event) => setContactInfoData({ ...contactInfoData, email: event.target.value })}
                                />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="contact-form__inputs">
                                <label>SUBJECT</label>
                                <input 
                                    name="subject" 
                                    type="text" 
                                    required 
                                    value={contactInfoData.subject}
                                    onChange={(event) => setContactInfoData({ ...contactInfoData, subject: event.target.value })}
                                />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="contact-form__inputs">
                                <label>MESSAGE</label>
                                <textarea 
                                    className="message-input" 
                                    name="message" 
                                    required
                                    value={contactInfoData.message}
                                    onChange={(event) => setContactInfoData({ ...contactInfoData, message: event.target.value })}
                                />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="btn-submit">
                                <motion.button 
                                    className="btn-btn_submit" 
                                    type="submit"
                                    whileHover={{ scale: 1.1, opacity: 0.5 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    SEND MESSAGE
                                </motion.button>
                            </div>
                        </Fade>
                        {contactInfoData.sent && (
                            <Fade bottom>
                                <div className="message-sent">
                                    <p>Your message has been sent. I'll take a look and reply as soon as I can. Thank you 😄</p>
                                </div>
                            </Fade>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
