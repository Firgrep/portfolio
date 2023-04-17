import React from 'react';
import Hero from '../../components/hero';

const PrivacyPolicyPage = () => {
    return(
        <>
            <Hero 
                displayText="Privacy Policy"
                type="project"
            />
            <main className="container">
                <div style={{marginBottom: "100px"}}>
                    <h1>Who</h1>
                    <p>Filip Niklas's portfolio website to showcase project work. The address is https://www.filipniklas.com</p>
                    <h1>Cookies and Other Data Storage</h1>
                    <p>No cookies, local- or session storage has been made use of, either explicitly intended or implicitly through the tools and technologies to the knowledge of the website creator. This site is intended for read-only and should therefore not require to store any information on the user-agent's local system.</p>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicyPage;
