import React from 'react';
import ContactMeImg from "../../images/contactMe-background.jpg";

import "./ContactMe.css";

export default function ContactMe() {
    return (
        <div className="contact-container">
            <img className="contact-container__img" src={ContactMeImg} alt="contact-me" />
            <div className="contact-container__form">
                <div className="contact-header">
                    <h2>Get In Touch</h2>
                </div>
                <hr className="contact-divider" />
                <div className="contact-subHeader">
                    <p>Interested in working with me or just want to say hi?</p>
                    <p>Feel free to send me a message!</p>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="contact-form__inputs">
                            <label>NAME</label>
                            <input type="text" required />
                        </div>
                        <div className="contact-form__inputs">
                            <label>EMAIL</label>
                            <input type="email" required/>
                        </div>
                        <div className="contact-form__inputs">
                            <label>SUBJECT</label>
                            <input type="text" required />
                        </div>
                        <div className="contact-form__inputs">
                            <label>MESSAGE</label>
                            <input type="textarea" required />
                        </div>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
