import React, {useState, useEffect } from 'react';
import Hero from '../../components/hero';
import ContactForm from '../../components/contactForm';
import { Projects } from '../../features/projects/Projects';
// import { Icon } from '../../features/icon/Icon';
import { Icons } from '../../features/icons/Icons';

const Home = () => {
    const [largeScreen, setLargeScreen] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );
    const [largerScreen, setLargerScreen] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    );

    const languages = ["javascript", "python", "cplusplus", "css", "html"]
    const tools = ["react", "redux", "django", "git", "matplotlib", "bootstrap", "numpy",
                    "pandas", "jspdf", "chartjs", "materialui"]

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setLargeScreen(e.matches));
        window
        .matchMedia("(min-width: 1200px)")
        .addEventListener('change', e => setLargerScreen(e.matches));
    }, []);

    return (
        <>
            <Hero />
            <main className="container">
            <section>
                <div style={{
                    marginBottom: "100px", 
                    padding: `${largerScreen ? "0 200px" : "0"}`
                }}>
                    <div style={{marginBottom: "60px"}}>
                        <h1>Languages I Speak</h1>
                    <div style={{display: "flex"}}>
                        <Icons dataArray={languages}></Icons>
                        {largeScreen &&
                        <div style={{
                            display: "flex", 
                            flexGrow: "1", 
                            justifyContent: "center"}}
                        >
                            <img src="gifOne.webp" height="248" width="248" alt=""/>
                        </div>}
                    </div>
                    </div>
                    <h1 style={{textAlign: "right"}}>Technologies I Use</h1>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        {largeScreen &&
                        <div style={{
                            display: "flex", 
                            flexGrow: "1", 
                            justifyContent: "center"}}
                        >
                            <img src="toolbox.svg" height="200" width="200" style={{opacity: "0.3"}} alt=""/>
                        </div>}
                        <Icons dataArray={tools}></Icons>
                    </div>
                </div>
            </section>
            <Projects />
            <ContactForm />
            </main>
        </>
    );
};

export default Home;
