import React from 'react';
import Hero from '../../components/hero';
import ContactForm from '../../components/contactForm';

const ContactPage = () => {
    return(
        <>
            <Hero 
                displayText="Contact"
                type="project"
            />
            <main className="container">
                <div style={{marginBottom: "100px"}}>
                    <h1 style={{textAlign: "center"}}>Contact</h1>
                    <p style={{textAlign: "center"}}>Have questions? Need help with a project? Or just want to say hi?</p>
                    <ContactForm />
                </div>
            </main>
        </>
    );
};

export default ContactPage;
