import React from 'react';
import Hero from '../../components/hero';
import { Link, NavLink } from 'react-router-dom'

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
                    <p>Recaptcha stores cookies for its risk analysis, this is to protect the site from potential abuse. From Google: "reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis." <Link to="https://developers.google.com/recaptcha/docs/faq" target="_blank">See here for more information</Link></p>
                    <p>The data fetched from the database is stored in the sessionStorage, which will remain reusable between pages and refreshes. Nothing more is added here apart from what the user already views on the page. However, when the user closes their tab or browser, the session ends and any data stored in the session from this site should be emptied.</p>
                    <p>Apart from these, no other cookies, local- or session storage has been made use of, either explicitly intended or implicitly through the tools and technologies to the knowledge of the website creator. This site is intended for read-only and should therefore not require to store any information on the user-agent's local system beyond what has already been made mention of above. Should an issue or misunderstanding arise, please contact the web master at the <NavLink to="/contact"> contact page</NavLink>.</p>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicyPage;
