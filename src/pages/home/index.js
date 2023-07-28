import React, {useState, useEffect } from 'react';
import Hero from '../../components/hero';
import ContactForm from '../../components/contactForm';
import { Projects } from '../../features/projects/Projects';
import { Icons } from '../../features/icons/Icons';
import { Link } from 'react-router-dom';
import { Button, Switch } from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { SiteWarning } from '../../features/siteWarning/SiteWarning';
import ErrorBoundary from '../../app/ErroBoundary';
import { AnimationsContainer } from '../../components/animation/AnimationsContainer';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { ContentCarousel } from '../../features/carousel/ContentCarousel';



const Home = () => {
    const [largeScreen, setLargeScreen] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );
    const [largerScreen, setLargerScreen] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    );
    const [boxDisplay, setBoxDisplay] = useState(false);

    const languages = ["typescript", "javascript", "python", "cplusplus", "css", "html"]
    // const tools = ["react", "redux", "django", "git", "matplotlib", "bootstrap", "numpy",
    //                 "pandas", "jspdf", "chartjs", "nodejs", "materialui", "firebase", "cypress"]

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

    const handleBoxDisplay = () => {
        if (boxDisplay === false) {
            setBoxDisplay(true);
        } else {
            setBoxDisplay(false);
        }
    }

    return (
        <>
            <Hero />
            <main className="container">
                <ErrorBoundary>
                    <SiteWarning />
                </ErrorBoundary>
                
                <ErrorBoundary>
                    <section>
                        <div style={{
                            marginBottom: "100px", 
                            padding: `${largerScreen ? "0 200px" : "0"}`
                        }}>
                            <div style={{marginBottom: "60px"}}>
                                <h1>Languages I Speak</h1>
                                <div style={{display: "flex"}}>
                                    <div style={{maxWidth: "350px"}}>
                                        <Icons dataArray={languages}></Icons>
                                    </div>
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
                            {(
                                // TODO Refactor to a standalone component
                                // This block of code should probably get its own home, but for
                                // now a basic description of the control flow.
                                // Code first checks if screen is large AND is WebGL compatible
                                // If not compatible, the flow defaults to static images.
                                WebGL.isWebGLAvailable() &&
                                largeScreen
                            ) ? (
                                <>  
                                    {/* 
                                        Button to allow user to freely switch between the animation
                                        and static asset display.
                                    */}
                                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                                        <Switch
                                            checked={boxDisplay}
                                            onChange={handleBoxDisplay}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <h4>Toggle View</h4>
                                    </div>
                                    {(
                                        // Boolean that controls display between animation and static assets
                                        boxDisplay
                                    ) ? (
                                        <div style={{
                                                minHeight: "525px",
                                            }}
                                        >
                                            {/* Static assets display */}
                                            <h1 style={{textAlign: "right"}}>Technologies I Use</h1>
                                            <div>
                                                {largeScreen &&
                                                <div style={{
                                                        position: "absolute",
                                                        display: "block", 
                                                        zIndex: "-20",
                                                        transform: "translate(1rem, 0)"
                                                    }}
                                                >
                                                    <img src="toolbox.svg" height="200" width="200" style={{opacity: "0.3"}} alt=""/>
                                                </div>}
                                                <div style={{
                                                        display: "flex", 
                                                        justifyContent: "flex-end",
                                                    }}
                                                >
                                                    <div style={{width: "525px", float: "right"}}>
                                                        <ContentCarousel />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{
                                                minHeight: "525px",
                                            }}
                                        >
                                            {/* Animation display*/}
                                            <h1 style={{textAlign: "right"}}>Technologies I Use</h1>
                                            <AnimationsContainer />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>  
                                    {/* Default static assets display */}
                                    <h1 style={{textAlign: "right"}}>Technologies I Use</h1>
                                    <div>
                                        {largeScreen &&
                                        <div style={{
                                                position: "absolute",
                                                display: "block", 
                                                zIndex: "-20",
                                                transform: "translate(1rem, 0)"
                                            }}
                                        >
                                            <img src="toolbox.svg" height="200" width="200" style={{opacity: "0.3"}} alt=""/>
                                        </div>}
                                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                                            <div style={{width: "525px", float: "right"}}>
                                                <ContentCarousel />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                </ErrorBoundary>
                <h1 style={{textAlign: "center", marginTop: "200px", marginBottom: "25px"}}>Apps I've Built</h1>
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
