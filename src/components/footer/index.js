import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../../features/icon/Icon';
import './index.css';

const Footer = () => {

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-5 col-md-6">
                        <div className="center-content direction-column">
                            <h2 style={{textAlign: "left"}} >Filip Niklas</h2>
                            <p className="text-footer" style={{textAlign: "justify"}}>
                                Web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way.
                            </p>
                            <div className="center-content" style={{flexGrow: "1"}}>
                                <div style={{width: "50px", marginBottom: "25px"}}>
                                    <img className="img-fluid avatar-footer" src="avatar.webp" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2 style={{textAlign: "left"}}>Projects</h2>
                            <p className="text-footer">
                                <NavLink className="site-link" to="/projects">Web App Development</NavLink>
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2 style={{textAlign: "left"}}>Ideas</h2>
                            <p className="text-footer">
                                <NavLink className="site-link" to="/blog">Software Discussion</NavLink>
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2 style={{textAlign: "left"}}>Social</h2>
                            <div style={{display: "flex", flexWrap: "wrap"}}>
                                <Link className="site-link" to="https://github.com/Firgrep" target="_blank">
                                    <Icon icon="github" size="tiny"/>
                                </Link>
                                <Link className="site-link" to="https://www.linkedin.com/in/filip-niklas/" target="_blank">
                                    <Icon icon="linkedin" size="tiny"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <div className="footer-foot">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <p>2023 | Filip Niklas</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <p id="privacy-notice">
                                <Link
                                    to="/privacy-policy"
                                    className="site-link"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
            
        </footer>
    )
};

export default Footer;
