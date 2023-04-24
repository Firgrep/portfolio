import React, { useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from './emailCred/emailCred';
import './index.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            form.current, 
            PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert("Email sent!");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    

    return(
        <section id="contact">
            <div className="container center-content">
                <div className="contact-container-style">
                    <h2 className="text-center">Get in Touch!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="formControlInputOne" className="form-label">Name</label>
                            <input
                                className="form-control"
                                id="formControlInputOne" 
                                type="text"
                                placeholder="Your name"
                                name="user_name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlInputTwo" className="form-label">Email Address</label>
                            <input 
                                className="form-control"
                                id="formControlInputTwo" 
                                type="email"
                                placeholder="example@company.com"
                                name="user_email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlInputThree" className="form-label">Subject</label>
                            <input 
                                className="form-control"
                                id="formControlInputThree" 
                                type="text"
                                name="subject"
                                placeholder="The subject of your message"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlInputFour" className="form-label">Message</label>
                            <textarea 
                                className="form-control"
                                name="message"
                                id="formControlInputFour"
                                placeholder="Write your message here"
                                cols="30"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <div className="center-content">
                            <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            type="submit"
                            >
                                Send
                            </Button>
                        </div> 
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
