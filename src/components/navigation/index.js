import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navigation = () => {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [smallScreen, setSmallScreen] = useState(
        window.matchMedia("(max-width: 1000px)").matches
    );
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleSmallScreen = e => setSmallScreen(e.matches);
        window
            .matchMedia("(max-width: 1000px)")
            .addEventListener('change', handleSmallScreen);

        return () => {
            window
                .matchMedia("(max-width: 1000px)")
                .removeEventListener("change", handleSmallScreen);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!smallScreen) {
                const currentScrollpos = window.pageYOffset;
                if (currentScrollpos > prevScrollpos) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
                setPrevScrollpos(currentScrollpos);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollpos, smallScreen]);

    return(
        <nav className={`navbar navbar-expand-lg sticky-top ${visible ? "" : "navbar-hidden"}`}>
            <div className="container">
                <span className="navbar-brand">
                    <NavLink 
                        to="/"
                        className="nav-link"
                    >
                    Filip Niklas
                    </NavLink>
                </span>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarMain" 
                    aria-controls="navbarMain" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className={`collapse navbar-collapse`}
                    id="navbarMain"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                to="/"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/projects"
                                className="nav-link"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/contact"
                                className="nav-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;