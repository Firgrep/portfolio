import React from "react";
import './index.css';

const Hero = ({ image, displayText, type }) => {
  
    return (
        <div
            className="hero-container"
            style={{
                backgroundImage: `linear-gradient(transparent, transparent), url("${
                    image || getHeroImage(type)
                }")
                `,
                height: getHeroHeight(type),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundColor: 'transparent'
            //      linear-gradient(black, black)
            }}
            >
            <h2>{displayText || getHeroTitle(type)}</h2>
        </div>
    );
};
  
export default Hero;

const getHeroImage = (type) => {
    switch (type) {
        case 'projects':
            return 'projects.jpg'
        case 'project':
            return '../projects.jpg'
        default: 
            return 'hero.webp';
    }
};

const getHeroHeight = (type) => {
    switch (type) {
        case 'projects':
            return '400px'
        case 'project':
            return '400px'
        default: 
            return '650px';
    }
};
  
const getHeroTitle = (type) => {
    switch (type) {
        case 'dog':
            return 'Dogs';
        default:
            return 'Welcome to the site!';
    }
};