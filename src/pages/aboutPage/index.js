import React from 'react';
import Hero from '../../components/hero';


const AboutPage = () => {
    return(
        <>
            <Hero 
                displayText="About"
                type="about"
            />
            <main className="container">
                <div style={{height: "1000px"}}>
                    More about Filip to come!
                </div>
                
            </main>
        </>
    );
};

export default AboutPage;
