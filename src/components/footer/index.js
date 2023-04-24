import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-5 col-md-6">
                        <div className="center-content direction-column">
                            <h2>Filip Niklas</h2>
                            <div className="center-content" style={{flexGrow: "1"}}>
                                <div style={{width: "50px"}}>
                                    <img className="img-fluid avatar-footer" src="avatar.jpg" alt=""></img>
                                </div>
                            </div>
                            <p className="text-footer">
                                Web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way.
                            </p>
                            
                            
                        </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2>Col 2</h2>
                            
                            <p className="text-footer">
                                Web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way.
                            </p>
                            
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2>Col 3</h2>
                            
                            <p className="text-footer">
                                Web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way.
                            </p>
                            
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-2 col-md-6">
                        <div className="center-content direction-column">
                            <h2>Col 4</h2>
                            
                            <p className="text-footer">
                                Web development and data analysis to extract insights and present them in a beautiful and easy-to-understand way.
                            </p>
                            
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
