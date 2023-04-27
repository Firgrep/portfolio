import React, { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const Hero = ({ image, displayText, type }) => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div
            data-aos="fade-in"
            className="hero-container"
            style={{
                backgroundImage: `linear-gradient(transparent, transparent), url("${
                    image || getHeroImage(type)
                }") `,
                height: getHeroHeight(type),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundColor: 'transparent',
                display: `${displayText ? "flex" : "block"}`,
                justifyContent: `${displayText ? "center" : ""}`,
                alignItems: `${displayText ? "center" : ""}`
            //      linear-gradient(black, black)
            }}
            >
            {   
                displayText 
                &&
                <h2 style={{backgroundColor: "rgba(0,0,0,0.4)", padding: "10px"}}>{displayText}</h2>
            }
            {
                !displayText 
                &&
                <>  
                    <div data-aos="fade-down-left" data-aos-delay="1000" className="greetings" style={{position: `${displayText ? "" : "absolute"}`}}>
                        <h1>Hi! I'm Filip,</h1><h2><b>I'm a philosophy teacher turned software developer</b></h2>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1400" className="avatar-container" style={{position: `${displayText ? "" : "absolute"}`}}>
                        <img className="img-fluid avatar" src="avatar.webp" alt=""></img>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1800" className="card" style={{position: `${displayText ? "" : "absolute"}`}}>
                        <div className="card-body">
                        I sit at the intersection of web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way that helps your business grow. <HashLink smooth to="/#contact">Get in touch!</HashLink>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
  
export default Hero;

const getHeroImage = (type) => {
    switch (type) {
        case 'projects':
            return 'projects.jpg';
        case 'project':
            return '../projects.jpg';
        case 'blog':
            return 'blog.webp';
        case 'contact':
            return 'contact.webp';
        case 'about':
            return 'coast.webp';
        default: 
            return 'hero.webp';
    }
};

const getHeroHeight = (type) => {
    switch (type) {
        case 'projects':
            return '400px';
        case 'project':
            return '400px';
        case 'blog':
            return '400px';
        case 'contact':
            return '400px';
        case 'about':
            return '400px';
        default: 
            return '650px';
    }
};
