import React from 'react';
import Hero from '../../components/hero';
import ContactForm from '../../components/contactForm';

const ContactPage = () => {
    return(
        <>
            <Hero 
                displayText="Contact"
                type="contact"
            />
            <main className="container">
                <div style={{marginBottom: "100px"}}>
                    <h4 style={{textAlign: "center", marginBottom: "50px"}}>Have questions? Need help with a project? Or just want to say hi?</h4>
                    <ContactForm />
                </div>
            </main>
        </>
    );
};

export default ContactPage;
