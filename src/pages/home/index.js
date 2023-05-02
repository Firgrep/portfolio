import React, {useState, useEffect } from 'react';
import Hero from '../../components/hero';
import ContactForm from '../../components/contactForm';
import { Projects } from '../../features/projects/Projects';
import { Icons } from '../../features/icons/Icons';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { SiteWarning } from '../../features/siteWarning/SiteWarning';
import ErrorBoundary from '../../app/ErroBoundary';


const Home = () => {
    const [largeScreen, setLargeScreen] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );
    const [largerScreen, setLargerScreen] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    );

    const languages = ["javascript", "python", "cplusplus", "css", "html"]
    const tools = ["react", "redux", "django", "git", "matplotlib", "bootstrap", "numpy",
                    "pandas", "jspdf", "chartjs", "nodejs", "materialui", "firebase", "cypress"]

    useEffect(() => {
        const handleLargeScreen = e => setLargeScreen(e.matches);
        const handleLargerScreen = e => setLargerScreen(e.matches);
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', handleLargeScreen);
        window
            .matchMedia("(min-width: 1200px)")
            .addEventListener('change', handleLargerScreen);

        return () => {
            window
                .matchMedia("(min-width: 768px)")
                .removeEventListener("change", handleLargeScreen);
            window
                .matchMedia("(min-width: 1200px")
                .removeEventListener("change", handleLargerScreen);
        }
    }, []);

    return (
        <>
            <Hero />
            <main className="container">
                <ErrorBoundary>
                    <SiteWarning />
                </ErrorBoundary>
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
                <h1 style={{textAlign: "center", marginTop: "100px", marginBottom: "25px"}}>Apps I've Built</h1>
                <Projects displayItems="3" />
                <div className="center-content" style={{margin: "100px"}}>
                    <Link
                    to="/projects"
                    className="site-link"
                    >
                        <Button 
                            variant="contained"
                            size="large"
                            endIcon={<ReadMoreIcon />}
                        >
                            See More Projects
                        </Button>
                    </Link>
                </div>
                <ContactForm />
            </main>
        </>
    );
};

export default Home;
